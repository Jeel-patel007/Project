import express from 'express';
import { bookAdd, fetchPosts, searchPost, showPosts } from '../controllers/postController.js';

const router = express.Router();

router.get("/", showPosts)
router.post('/addBook', bookAdd);
router.get("/posts", fetchPosts);
router.get("/searchPost", searchPost);

export default router;