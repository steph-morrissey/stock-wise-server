import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  details: { type: String, required: false },
  isEnables: { type: Boolean, required: false },
});

const Supplier = mongoose.model('Supplier', schema);

module.exports = Supplier;
