
/**
 * @swagger
 * tags:
 *   name: Cows
 *   description: Cow management endpoints
 */

import express from 'express';
import { addCow, getCows, getCowById, updateCow, deleteCow } from '../controllers/cow.controller.js';

const router = express.Router();

/**
 * @swagger
 * /cows/addCow:
 *   post:
 *     summary: Create a new cow
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Cows]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cow'
 *     responses:
 *       '201':
 *         description: Cow Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cow'
 *       '400':
 *         description: Bad Request
 */
router.post('/addCow', addCow);

/**
 * @swagger
 * /cows/getAllCows:
 *   get:
 *     summary: Get all cows
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Cows]
 *     responses:
 *       '200':
 *         description: A list of cows
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cow'
 *       '500':
 *         description: Internal Server Error
 */
router.get('/getAllCows', getCows);

/**
 * @swagger
 * /cows/getById/{id}:
 *   get:
 *     summary: Get a cow by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Cows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cow
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cow details by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cow'
 *       '404':
 *         description: Cow not found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/getById/:id', getCowById);

/**
 * @swagger
 * /cows/update/{id}:
 *   put:
 *     summary: Update a cow by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Cows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cow
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cow'
 *     responses:
 *       '200':
 *         description: Updated cow details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cow'
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Cow not found
 */
router.put('/update/:id', updateCow);

/**
 * @swagger
 * /cows/delete/{id}:
 *   delete:
 *     summary: Delete a cow by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Cows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the cow
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deleted cow details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cow'
 *       '404':
 *         description: Cow not found
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/delete/:id', deleteCow);

export default router;
