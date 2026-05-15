import * as repositoryService from '../services/repository.service.js';
import catchAsync from '../utils/catchAsync.js';

export const importRepo = catchAsync(async (req, res) => {
  const repo = await repositoryService.importRepository(req.user._id, req.body);
  res.status(201).json({
    status: 'success',
    data: repo
  });
});

export const getRepos = catchAsync(async (req, res) => {
  const repos = await repositoryService.getWorkspaces(req.user._id, req.query);
  res.status(200).json({
    status: 'success',
    results: repos.length,
    data: repos
  });
});

export const getRepo = catchAsync(async (req, res) => {
  const repo = await repositoryService.getWorkspaceById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: repo
  });
});
