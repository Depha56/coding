import express from 'express';
const router = express.Router();
import { createSale, getSales, getSaleById, updateSale, deleteSale } from '../controllers/sales.controller.js';

/**
 * @swagger
 * /sales/addSale:
 *   post:
 *     summary: Create a new sale
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Sales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *     responses:
 *       '201':
 *         description: Sale created successfully
 *       '400':
 *         description: Bad request
 */
router.post('/addSale', createSale);

/**
 * @swagger
 * /sales/getAllSales:
 *   get:
 *     summary: Get all sales
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Sales]
 *     responses:
 *       '200':
 *         description: Success
 *       '500':
 *         description: Internal server error
 */
router.get('/getAllSales', getSales);

/**
 * @swagger
 * /sales/getSaleById/{id}:
 *   get:
 *     summary: Get a sale by ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the sale to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Success
 *       '404':
 *         description: Sale not found
 *       '500':
 *         description: Internal server error
 */
router.get('/getSaleById/:id', getSaleById);

/**
 * @swagger
 * /sales/updateSale/{id}:
 *   put:
 *     summary: Update a sale by ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the sale to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *     responses:
 *       '200':
 *         description: Success
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Sale not found
 *       '500':
 *         description: Internal server error
 */
router.put('/updateSale/:id', updateSale);

/**
 * @swagger
 * /sales/deleteSale/{id}:
 *   delete:
 *     summary: Delete a sale by ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the sale to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Success
 *       '404':
 *         description: Sale not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/deleteSale/:id', deleteSale);

export default router;
