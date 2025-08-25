import express from 'express';
import {map} from '../controllers/mapController.js';
import path from 'path'; 
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const router=express.Router();

router.post("/", map);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/map.html'));
})

export default router;