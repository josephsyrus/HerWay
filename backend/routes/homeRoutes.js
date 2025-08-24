import express from 'express';
import {home} from '../controllers/homeController.js';

const router=express.Router();

router.post("/", home);

export default router;