const PORT = process.env.PORT || 8000;

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/inventory';

const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

export default {
  PORT,
  DB_URI,
  MONGOOSE_OPTIONS,
};
