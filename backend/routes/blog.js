import express from 'express';
import {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    likeBlog,
    getUserBlogs,
    getMyBlogs
} from '../controllers/blogController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllBlogs);
router.get('/user/:userId', getUserBlogs);
router.get('/:id', getBlogById);

// Protected routes (require authentication)
router.post('/', protect, createBlog);
router.get('/my/blogs', protect, getMyBlogs);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);
router.put('/:id/like', protect, likeBlog);

export default router;
