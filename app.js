

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';
import cowRoutes from './routes/cow.route.js';
import newbornCowRoutes from './routes/newbornCow.route.js';
import workerRoutes from './routes/worker.route.js';
import milkRecordRoutes from './routes/milkRecord.route.js';
import errorHandler from './middlewares/validation.js';
import configuration from './configs/index.js';
import salesRoutes from './routes/sales.route.js';

import mongoose from 'mongoose';
import { authenticateUser } from './middlewares/auth.middleware.js';
import dotenv from 'dotenv';
// Import route files
import authRoutes from './routes/auth.route.js';
const app = express();

app.use(express.json());

// Use Swagger UI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Error handling middleware
app.use(errorHandler);

mongoose
  .connect("mongodb://127.0.0.1:27017/livestock")
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log(err));
  app.use('/auth', authRoutes);

  // Middleware for authentication
  app.use(authenticateUser);
dotenv.config();
  // Use the routes
app.use('/cows', cowRoutes);
app.use('/newborn-cows', newbornCowRoutes);
app.use('/workers', workerRoutes);
app.use('/milk-records', milkRecordRoutes);
app.use('/sales', salesRoutes);

app.listen(configuration.port, () => console.log(`Server running on port ${configuration.port}`));


