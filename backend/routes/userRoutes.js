import express from 'express';
import { getProfile, updateProfile, deleteProfile } from '../controllers/userController.js';

const router=express.Router();

router.get("/:id", getProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;