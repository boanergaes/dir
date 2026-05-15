import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  githubUsername: {
    type: String,
    required: true,
    unique: true
  },
  githubId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    sparse: true
  },
  avatarUrl: String,
  accessToken: String,
  reposOwned: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Repository'
  }]
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
