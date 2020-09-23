import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  details: {
    firstLine: { type: String, required: true },
    secondLine: { type: String, required: true },
    thirdLine: { type: String, required: false },
    postcode: { type: String, required: true },
    phone: { type: String, required: true },
  },
  isEnabled: { type: Boolean, required: false },
});

const Supplier = mongoose.model('Supplier', schema);

export default Supplier;
