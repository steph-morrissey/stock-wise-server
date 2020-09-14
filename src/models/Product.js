import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  supplierId:,
  categoryId: ,
  name: { type: String, required: true },
  status: { type: String, required: true },
  dateNotified: { type: Date, required: false },
  costPrice: { type: Number, required: false },
  sellingPrice: { type: Number, required: false },
});

const Product = mongoose.model('Product', schema);

export default Product;
