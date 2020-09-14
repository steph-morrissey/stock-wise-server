// seed.js
import mongoose from 'mongoose';

import { MONGOOSE_OPTIONS, DB_URI } from '../config';
import db from '../models';

const supplierId = mongoose.Types.ObjectId('5f5fbbe44a4e255799fcc463');
const spiritsId = mongoose.Types.ObjectId('5f5fbbd1b8791457703fd3fa');

const product = [
  {
    name: 'Absolut Vodka',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 13.99,
    sellingPrice: 15.99,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Absolut Vanilla',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 13.99,
    sellingPrice: 15.99,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Absolut Raspberri',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 13.99,
    sellingPrice: 15.99,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Aperol',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 8,
    sellingPrice: 12,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Barenjager',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 28,
    sellingPrice: 30.34,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Beefeater',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 13.99,
    sellingPrice: 15.99,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Beefeater Pink',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 13.99,
    sellingPrice: 15.99,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Beefeater Blood Orange',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 13.99,
    sellingPrice: 15.99,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Bombay Sapphire',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 19,
    sellingPrice: 21.5,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Havana 3',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 15.99,
    sellingPrice: 18.99,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Havana 7',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 19.99,
    sellingPrice: 23.25,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Jagermeister',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 8,
    sellingPrice: 12,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Jamesons',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 17,
    sellingPrice: 21.23,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Olmeca Blanco',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 14,
    sellingPrice: 16.99,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: 'Olmeca Reposado',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 14,
    sellingPrice: 16.99,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: ' Tanqueray',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 9,
    sellingPrice: 13,
    supplierId,
    categoryId: spiritsId,
  },
  {
    name: ' Tanqueray No. Ten Gin',
    status: 'In Stock',
    dateNotified: null,
    costPrice: 22,
    sellingPrice: 25,
    supplierId,
    categoryId: spiritsId,
  },
];

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
