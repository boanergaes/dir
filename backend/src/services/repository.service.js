import { Repository } from '../models/repository.model.js';
import { User } from '../models/user.model.js';
import AppError from '../utils/AppError.js';
import { createGitHubClient } from '../config/github.js';

export const importRepository = async (userId, repoData) => {
  const { githubId } = repoData;

  const existingRepo = await Repository.findOne({ githubId });
  if (existingRepo) {
    throw new AppError('Repository already imported', 400);
  }

  const repo = await Repository.create({
    ...repoData,
    ownerId: userId,
    members: [{ userId, role: 'owner' }],
    channels: [{ name: 'general' }]
  });

  await User.findByIdAndUpdate(userId, {
    $push: { reposOwned: repo._id }
  });

  return repo;
};

export const getWorkspaces = async (userId, filters = {}) => {
  const query = { 'members.userId': userId };
  if (filters.tag) query.tags = filters.tag;
  if (filters.search) {
    query.$or = [
      { workspaceName: { $regex: filters.search, $options: 'i' } },
      { githubRepoName: { $regex: filters.search, $options: 'i' } }
    ];
  }

  return await Repository.find(query)
    .sort({ updatedAt: -1 })
    .populate('members.userId', 'githubUsername avatarUrl');
};

export const getWorkspaceById = async (repoId) => {
  const repo = await Repository.findById(repoId)
    .populate('members.userId', 'githubUsername avatarUrl');
    
  if (!repo) throw new AppError('Workspace not found', 404);
  return repo;
};
