import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

// error handler must be last
app.use(errorHandler);

export default app;
