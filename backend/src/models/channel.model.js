import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Repository',
    required: true
  },
  isPrivate: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export const Channel = mongoose.model('Channel', channelSchema);
