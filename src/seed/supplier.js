// seed.js
import mongoose from 'mongoose';

import { MONGOOSE_OPTIONS, DB_URI } from '../config';
import db from '../models';

const supplier = [
  {
    name: 'LWC',
    details: {
      address: 'Unit 3 Stainburn Rd, Openshaw, Manchester M11 2DN',
      phone: '0161 438 4088',
    },
    isEnabled: false,
  },
];

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

db.Supplier.deleteMany({})
  .then(() => db.Supplier.collection.insertMany(supplier))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
