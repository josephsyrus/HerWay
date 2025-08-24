import express from 'express';
import {map} from '../controllers/mapController.js';

const router=express.Router();

router.post("/", map);

export default router;