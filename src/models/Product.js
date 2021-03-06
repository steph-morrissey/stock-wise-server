import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  status: { type: String, required: true, default: 'In Stock' },
  dateNotified: { type: Date, required: false },
  costPrice: { type: Number, required: false },
  sellingPrice: { type: Number, required: false },
  supplierId: { type: Schema.Types.ObjectId, ref: 'Supplier' },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
});

const Product = mongoose.model('Product', schema);

export default Product;
