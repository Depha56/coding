// controllers/sales.controller.js

import Sale from '../models/sales.model.js';

// Create a new sale
export const createSale = async (req, res) => {
  try {
    const sale = await Sale.create(req.body);
    res.status(201).json({ message: 'Sale created successfully', sale });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all sales
export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find({});
    res.send(sales);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a sale by ID
export const getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) return res.status(404).send('Sale not found');
    res.send(sale);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a sale by ID
export const updateSale = async (req, res) => {
  try {
    const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sale) return res.status(404).send('Sale not found');
    res.send(sale);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a sale by ID
export const deleteSale = async (req, res) => {
  try {
    const sale = await Sale.findByIdAndDelete(req.params.id);
    if (!sale) return res.status(404).send('Sale not found');
    res.send(sale);
  } catch (error) {
    res.status(500).send(error);
  }
};
