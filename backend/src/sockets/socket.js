import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js';

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      methods: ["GET", "POST"]
    }
  });

  // Authentication Middleware
  io.use((socket, next) => {
    const token = socket.handshake.auth?.token || socket.handshake.headers?.token;
    
    if (!token) {
      return next(new Error('Authentication error: No token provided'));
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;
      next();
    } catch (err) {
      next(new Error('Authentication error: Invalid token'));
    }
  });

  io.on('connection', (socket) => {
    const userId = socket.user.id;
    console.log(`Socket connected: ${socket.id} (User: ${userId})`);

    // Standard Room Management
    socket.on('join_room', (room) => {
      socket.join(room);
      console.log(`Socket ${socket.id} joined room: ${room}`);
    });

    socket.on('leave_room', (room) => {
      socket.leave(room);
      console.log(`Socket ${socket.id} left room: ${room}`);
    });

    // Real-time Chat Features
    socket.on('typing_start', ({ roomId, username }) => {
      socket.to(roomId).emit('user_typing_start', { userId, username, roomId });
    });

    socket.on('typing_stop', ({ roomId }) => {
      socket.to(roomId).emit('user_typing_stop', { userId, roomId });
    });

    // Message Broadcasting (for instant UI updates before DB sync if needed)
    socket.on('send_message', (messageData) => {
      const { roomId } = messageData;
      io.to(roomId).emit('new_message', {
        ...messageData,
        senderId: userId,
        timestamp: new Date()
      });
    });

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) throw new Error('Socket.io not initialized');
  return io;
};
