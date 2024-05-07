/**
 * @swagger
 * tags:
 *   name: Newborn Cows
 *   description: Endpoints for managing newborn cows
 */

import express from 'express';
import { createNewbornCow, getNewbornCows, getNewbornCowById, updateNewbornCow, deleteNewbornCow } from '../controllers/newbornCow.controller.js';

const router = express.Router();

/**
 * @swagger
 * /newborn-cows/addNewbornCow:
 *   post:
 *     summary: Create a new newborn cow
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Newborn Cows]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewbornCow'
 *     responses:
 *       '201':
 *         description: Newborn Cow Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewbornCow'
 *       '400':
 *         description: Bad Request
 */
router.post('/addNewbornCow', createNewbornCow);

/**
 * @swagger
 * /newborn-cows/getNewbornCows:
 *   get:
 *     summary: Get all newborn cows
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Newborn Cows]
 *     responses:
 *       '200':
 *         description: A list of newborn cows
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NewbornCow'
 *       '500':
 *         description: Internal Server Error
 */
router.get('/getNewbornCows', getNewbornCows);

/**
 * @swagger
 * /newborn-cows/getNewbornCowById/{id}:
 *   get:
 *     summary: Get a newborn cow by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Newborn Cows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the newborn cow
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Newborn Cow details by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewbornCow'
 *       '404':
 *         description: Newborn Cow not found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/getNewbornCowById/:id', getNewbornCowById);

/**
 * @swagger
 * /newborn-cows/updateNewbornCow/{id}:
 *   put:
 *     summary: Update a newborn cow by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Newborn Cows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the newborn cow
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewbornCow'
 *     responses:
 *       '200':
 *         description: Updated newborn cow details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewbornCow'
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Newborn Cow not found
 */
router.put('/updateNewbornCow/:id', updateNewbornCow);

/**
 * @swagger
 * /newborn-cows/deleteNewbornCow/{id}:
 *   delete:
 *     summary: Delete a newborn cow by its ID
 *     security:
 *       - BearerAuth: [authentication]   # Use OAuth with a different scope
 *     tags: [Newborn Cows]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the newborn cow
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deleted newborn cow details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewbornCow'
 *       '404':
 *         description: Newborn Cow not found
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/deleteNewbornCow/:id', deleteNewbornCow);

export default router;
