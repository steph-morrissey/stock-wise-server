import mongoose from 'mongoose';

import { MONGOOSE_OPTIONS, DB_URI } from '../config';
import db from '../models';

const category = [
  {
    name: 'Spirits',
    isEnabled: false,
  },
  {
    name: 'Beers',
    isEnabled: false,
  },
  {
    name: 'Wines',
    isEnabled: false,
  },
  {
    name: 'Softs',
    isEnabled: false,
  },
];

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

db.Category.deleteMany({})
  .then(() => db.Category.collection.insertMany(category))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
