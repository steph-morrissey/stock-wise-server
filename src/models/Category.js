import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  isEnables: { type: Boolean, default: true },
});

const Category = mongoose.model('Category', schema);

module.exports = Category;
