import  Worker from '../models/worker.model.js';

export const createWorker = async (req, res) => {
 try {
    const worker = new Worker(req.body);
    await worker.save();
    res.status(201).send(worker);
 } catch (error) {
    res.status(400).send(error);
 }
};

export const getWorkers = async (req, res) => {
 try {
    const workers = await Worker.find({});
    res.send(workers);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const getWorkerById = async (req, res) => {
 try {
    const worker = await Worker.findById(req.params.id);
    if (!worker) return res.status(404).send('Worker not found');
    res.send(worker);
 } catch (error) {
    res.status(500).send(error);
 }
};

export const updateWorker = async (req, res) => {
 try {
    const worker = await Worker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!worker) return res.status(404).send('Worker not found');
    res.send(worker);
 } catch (error) {
    res.status(400).send(error);
 }
};

export const deleteWorker = async (req, res) => {
 try {
    const worker = await Worker.findByIdAndDelete(req.params.id);
    if (!worker) return res.status(404).send('Worker not found');
    res.send(worker);
 } catch (error) {
    res.status(500).send(error);
 }
};
