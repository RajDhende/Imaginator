import express from 'express';
import Post from '../mongodb/models/post.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

const router = express.Router();

// Get all Posts
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, data: error });
  }
});

// Create a Post
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    // Await the upload function to get the result
    const photoURL = await uploadToCloudinary(photo);

    // Create a new post with the photo URL from Cloudinary
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoURL.url, 
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
