import app from './app.js';
import http from 'http';
import dotenv from 'dotenv';
import { initSocket } from './sockets/socket.js';

dotenv.config();

const server = http.createServer(app);

// Initialize Socket.io
initSocket(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
