import mongoose from 'mongoose';

const cowSchema = new mongoose.Schema({
    earTag: {
        type: String,
        required: true,
        unique: true
    },
    weight: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: false,
        enum: ["Calf", "Bull", "Cow"],
        default: "Cow",
    },
  
    healthyStatus: {
        type: String,
        required: true,
        enum: ["Healthy", "Sick", "Old"],
        default: "Healthy",
    },
    
    milking: {
        type: String,
        required: false
    },
    pregnant: {
        type: String,
        required: false
    },
    calvingDate: {
        type: Date,
        required: false
    }
});

const cow= mongoose.model('Cow', cowSchema);
export default cow