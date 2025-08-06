import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { config } from 'dotenv';

// Load environment variables
config();

// Custom middlewares & route handlers
import errorMiddleware from './middlewares/error.middleware.js';
import userRoutes from './routes/user.Routes.js';
import courseRoutes from './routes/course.Routes.js';
import paymentRoutes from './routes/payment.routes.js';
import miscRoutes from './routes/miscellanous.routes.js';

const app = express();

// Middleware stack
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(morgan('dev'));

// Health check route
app.get('/ping', (_req, res) => {
  res.send('Pong');
});

// Route registrations
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/course', courseRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1', miscRoutes);

// 404 handler
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!! 404 - Page not found');
});

// Error middleware
app.use(errorMiddleware);

export default app;
