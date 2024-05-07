import NewbornCow from '../models/newbornCow.model.js';

export const createNewbornCow = async (req, res) => {
 try {
    const newbornCow = new NewbornCow(req.body);
    await newbornCow.save();
    res.status(201).send(newbornCow);
 } catch (error) {
    res.status(400).send(error);
 }
};

export const getNewbornCows = async (req, res) => {
 try {
    const newbornCows = await NewbornCow.find({});
    res.send(newbornCows);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const getNewbornCowById = async (req, res) => {
 try {
    const newbornCow = await NewbornCow.findById(req.params.id);
    if (!newbornCow) return res.status(404).send('Newborn cow not found');
    res.send(newbornCow);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const updateNewbornCow = async (req, res) => {
 try {
    const newbornCow = await NewbornCow.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!newbornCow) return res.status(404).send('Newborn cow not found');
    res.send(newbornCow);
 } catch (error) {
    res.status(400).send(error);
 }
};

export const deleteNewbornCow = async (req, res) => {
 try {
    const newbornCow = await NewbornCow.findByIdAndDelete(req.params.id);
    if (!newbornCow) return res.status(404).send('Newborn cow not found');
    res.send(newbornCow);
 } catch (error) {
    res.status(500).send(error);
 }
};
