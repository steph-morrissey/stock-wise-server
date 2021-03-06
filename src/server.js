import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { PORT, DB_URI, MONGOOSE_OPTIONS } from './config';

import apiRoutes from './routes/api';
import authRoutes from './routes/auth';
import authenticateUser from './middlewares/authenticateUser';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use('/auth', authRoutes);
app.use(authenticateUser);
app.use('/api', apiRoutes);

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
