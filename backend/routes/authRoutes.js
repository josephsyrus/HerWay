import express from 'express';
import {signup, login, logout} from '../controllers/authController.js';
import path from 'path'; 
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/login.html'));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/signup.html'));
});

export default router;
