// seed.js
import mongoose from 'mongoose';

import { MONGOOSE_OPTIONS, DB_URI } from '../config';
import db from '../models';

const category = [
  // _id = ObjectId("5f5fa9c7f22cd552f6094317"
  {
    name: 'Spirits',
    isEnabled: false,
  },
  // _id = ObjectId("5f5fa9c7f22cd552f6094318
  {
    name: 'Beers',
    isEnabled: false,
  },
  // _id = ObjectId("5f5fa9c7f22cd552f6094319
  {
    name: 'Wines',
    isEnabled: false,
  },
  // _id = ObjectId("5f5fa9c7f22cd552f609431a
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
