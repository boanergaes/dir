import mongoose from 'mongoose';

const repositorySchema = new mongoose.Schema({
  githubId: {
    type: String,
    required: true,
    unique: true
  },
  githubRepoName: {
    type: String,
    required: true
  },
  githubOwner: {
    type: String,
    required: true
  },
  githubFullName: {
    type: String,
    required: true
  },
  workspaceName: {
    type: String,
    required: true
  },
  description: String,
  url: String,
  language: String,
  isPrivate: {
    type: Boolean,
    default: false
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['owner', 'admin', 'member'],
      default: 'member'
    }
  }],
  channels: [{
    name: String,
    channel_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel'
    }
  }],
  tags: [String]
}, { timestamps: true });

export const Repository = mongoose.model('Repository', repositorySchema);
