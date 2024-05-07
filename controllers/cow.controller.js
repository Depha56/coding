import  Cow from '../models/cow.model.js';

export const addCow = async (req, res) => {
   try {
      
      const cow = await Cow.create(req.body);
      res.status(201).json({message:"Cow Created Succesfully",Cow:cow});
   } catch (error) {
    
      res.status(400).send(error);
   }
  };

export const getCows = async (req, res) => {
 try {
    const cows = await Cow.find({});
    res.send(cows);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const getCowById = async (req, res) => {
 try {
    const cow = await Cow.findById(req.params.id);
    if (!cow) return res.status(404).send('Cow not found');
    res.send(cow);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const updateCow = async (req, res) => {
 try {
    const cow = await Cow.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cow) return res.status(404).send('Cow not found');
    res.send(cow);
 } catch (error) {
    res.status(400).send(error);
 }
};

export const deleteCow = async (req, res) => {
 try {
    const cow = await Cow.findByIdAndDelete(req.params.id);
    if (!cow) return res.status(404).send('Cow not found');
    res.send(cow);
 } catch (error) {
    res.status(500).send(error);
 }
};
