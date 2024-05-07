
/**
 * @swagger
 * tags:
 *   name: Milk Records
 *   description: Endpoints for managing milk records
 */

import express from 'express';
import { createMilkRecord, getMilkRecords, getMilkRecordById, updateMilkRecord, deleteMilkRecord } from '../controllers/milkRecord.controller.js';

const router = express.Router();

/**
 * @swagger
 * /milk-records/addMilkRecord:
 *   post:
 *     summary: Create a new milk record
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Milk Records]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MilkRecord'
 *     responses:
 *       '201':
 *         description: Milk Record Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MilkRecord'
 *       '400':
 *         description: Bad Request
 */
router.post('/addMilkRecord', createMilkRecord);

/**
 * @swagger
 * /milk-records/getMilkRecords:
 *   get:
 *     summary: Get all milk records
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Milk Records]
 *     responses:
 *       '200':
 *         description: A list of milk records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MilkRecord'
 *       '500':
 *         description: Internal Server Error
 */
router.get('/getMilkRecords', getMilkRecords);

/**
 * @swagger
 * /milk-records/getMilkRecordById/{id}:
 *   get:
 *     summary: Get a milk record by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Milk Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the milk record
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Milk Record details by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MilkRecord'
 *       '404':
 *         description: Milk Record not found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/getMilkRecordById/:id', getMilkRecordById);

/**
 * @swagger
 * /milk-records/updateMilkRecord/{id}:
 *   put:
 *     summary: Update a milk record by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Milk Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the milk record
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MilkRecord'
 *     responses:
 *       '200':
 *         description: Updated milk record details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MilkRecord'
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Milk Record not found
 */
router.put('/updateMilkRecord/:id', updateMilkRecord);

/**
 * @swagger
 * /milk-records/deleteMilkRecord/{id}:
 *   delete:
 *     summary: Delete a milk record by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Milk Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the milk record
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deleted milk record details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MilkRecord'
 *       '404':
 *         description: Milk Record not found
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/deleteMilkRecord/:id', deleteMilkRecord);

export default router;
