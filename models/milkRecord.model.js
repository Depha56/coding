import  mongoose from 'mongoose';

const milkRecordSchema = new mongoose.Schema({
 cow: { type: mongoose.Schema.Types.ObjectId, ref: 'Cow', required: true },
 date: { type: Date, required: true },
 quantity: { type: String, required: true }
});

const milk = mongoose.model('MilkRecord', milkRecordSchema);
export default milk
