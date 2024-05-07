import mongoose from 'mongoose';

const salesSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantitySold: { type: String, required: true },
  price: { type: Number, required: true },
  customerName: { type: String, required: true },
});

const Sale = mongoose.model('Sale', salesSchema);

export default Sale;
