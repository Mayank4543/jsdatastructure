
import express from 'express';
import { getme, login, logout, register } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
const router= express.Router();
router.post('/register',register);
router.post('/login',login);
router.get('/me',protect,getme);
router.post('/logout',protect,logout);
export default router;
