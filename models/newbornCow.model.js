import  mongoose from 'mongoose';

const newbornCowSchema = new mongoose.Schema({
    earTag: {
        type: String,
        required: true,
        unique: true
    },
 cow: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Cow', 
    required: true 
},
 birthDate: { type: Date, required: false }
});

const newBorn = mongoose.model('NewbornCow', newbornCowSchema);
export default newBorn