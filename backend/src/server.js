import app from './app.js';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { io };
