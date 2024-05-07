import  MilkRecord from '../models/milkRecord.model.js';

export const createMilkRecord = async (req, res) => {
 try {
    const milkRecord = new MilkRecord(req.body);
    await milkRecord.save();
    res.status(201).send(milkRecord);
 } catch (error) {
    res.status(400).send(error);
 }
};

export const getMilkRecords = async (req, res) => {
 try {
    const milkRecords = await MilkRecord.find({});
    res.send(milkRecords);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const getMilkRecordById = async (req, res) => {
 try {
    const milkRecord = await MilkRecord.findById(req.params.id);
    if (!milkRecord) return res.status(404).send('Milk record not found');
    res.send(milkRecord);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const updateMilkRecord = async (req, res) => {
 try {
    const milkRecord = await MilkRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!milkRecord) return res.status(404).send('Milk record not found');
    res.send(milkRecord);
 } catch (error) {
    res.status(400).send(error);
 }
};

export const deleteMilkRecord = async (req, res) => {
 try {
    const milkRecord = await MilkRecord.findByIdAndDelete(req.params.id);
    if (!milkRecord) return res.status(404).send('Milk record not found');
    res.send(milkRecord);
 } catch (error) {
    res.status(500).send(error);
 }
};
