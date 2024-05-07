import mongoose from 'mongoose';

const workerSchema = new mongoose.Schema({
 name: { type: String, required: true },
 role: { type: String, required: true }
});

const worker = mongoose.model('Worker', workerSchema);
export default worker