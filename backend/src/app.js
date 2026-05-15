import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import AppError from './utils/AppError.js';
import globalErrorHandler from './middlewares/error.middleware.js';
import repositoryRoutes from './routes/repository.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Dir Collaboration API" });
});

app.use('/api/repos', repositoryRoutes);

// Handle undefined routes
app.all('*path', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHandler);

export default app;
