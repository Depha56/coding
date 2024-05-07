/**
 * @swagger
 * tags:
 *   name: Workers
 *   description: Endpoints for managing workers
 */

import express from 'express';
import { createWorker, getWorkers, getWorkerById, updateWorker, deleteWorker } from '../controllers/worker.controller.js';

const router = express.Router();

/**
 * @swagger
 * /workers/addWorker:
 *   post:
 *     summary: Create a new worker
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Workers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Worker'
 *     responses:
 *       '201':
 *         description: Worker Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Worker'
 *       '400':
 *         description: Bad Request
 */
router.post('/addWorker', createWorker);

/**
 * @swagger
 * /workers/getWorkers:
 *   get:
 *     summary: Get all workers
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Workers]
 *     responses:
 *       '200':
 *         description: A list of workers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Worker'
 *       '500':
 *         description: Internal Server Error
 */
router.get('/getWorkers', getWorkers);

/**
 * @swagger
 * /workers/getWorkerById/{id}:
 *   get:
 *     summary: Get a worker by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the worker
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Worker details by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Worker'
 *       '404':
 *         description: Worker not found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/getWorkerById/:id', getWorkerById);

/**
 * @swagger
 * /workers/updateWorker/{id}:
 *   put:
 *     summary: Update a worker by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the worker
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Worker'
 *     responses:
 *       '200':
 *         description: Updated worker details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Worker'
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Worker not found
 */
router.put('/updateWorker/:id', updateWorker);

/**
 * @swagger
 * /workers/deleteWorker/{id}:
 *   delete:
 *     summary: Delete a worker by its ID
*     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the worker
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deleted worker details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Worker'
 *       '404':
 *         description: Worker not found
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/deleteWorker/:id', deleteWorker);

export default router;
