import express from "express";
import { createBlog, getBlogs } from "../controllers/blogController";
import { verifyToken } from "../middlewares/authMiddleware";

const router = express.Router();

// Create a new blog
router.post("/", verifyToken, createBlog);

// Get all blogs
router.get("/", getBlogs);

// Get a single blog by ID
router.get("/:id", async (req, res) => {
    // Implement the controller logic later
});

// Update a blog by ID
router.put("/:id", verifyToken, async (req, res) => {
    // Implement the controller logic later
});

// Delete a blog by ID
router.delete("/:id", verifyToken, async (req, res) => {
    // Implement the controller logic later
});

export default router;
