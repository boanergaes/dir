import { Message } from '../models/message.model.js';
import { getIO } from '../sockets/socket.js';

export const saveMessage = async (messageData) => {
  const { content, senderId, channelId, workspaceId } = messageData;
  
  const message = await Message.create({
    content,
    sender: senderId,
    channel: channelId,
    workspace: workspaceId
  });

  // Populate sender info for the frontend
  const populatedMessage = await Message.findById(message._id)
    .populate('sender', 'githubUsername avatarUrl');

  return populatedMessage;
};

export const getChannelMessages = async (channelId, limit = 50) => {
  return await Message.find({ channel: channelId })
    .sort({ createdAt: -1 })
    .limit(limit)
    .populate('sender', 'githubUsername avatarUrl');
};
