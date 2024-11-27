import Blog from "../models/Blog";

export const createBlog = async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const userId = req.user.id; // Assume `req.user` is populated by middleware

    try {
        const blog = new Blog({ title, content, author: userId });
        await blog.save();
        res.status(201).json({ blog });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

export const getBlogs = async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.find().populate("author", "name email");
        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
