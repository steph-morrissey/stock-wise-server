import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { PORT, DB_URI, MONGOOSE_OPTIONS } from './config';

import apiRoutes from './routes/api';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use('/api', apiRoutes);

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on: http://localhost:${PORT}`);
});
