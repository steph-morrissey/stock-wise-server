// seed.js
import mongoose from 'mongoose';

import { MONGOOSE_OPTIONS, DB_URI } from '../config';
import db from '../models';
// import supplier from './supplier';
// import category from './category';
import product from './product';

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

db.Product.deleteMany({})
  .then(() => db.Product.collection.insertMany(product))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Only re-enable if seed data changes

// db.Supplier.deleteMany({})
//   .then(() => db.Supplier.collection.insertMany(supplier))
//   .then((data) => {
//     console.log(`${data.result.n} records inserted!`);
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// db.Category.deleteMany({})
//   .then(() => db.Category.collection.insertMany(category))
//   .then((data) => {
//     console.log(`${data.result.n} records inserted!`);
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
