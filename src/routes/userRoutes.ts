import express from "express";
import { hashPassword } from "../utils/auth";
import User from "../models/User";

const router = express.Router();

router.post("/register", async (req, res) => {
   const { name, email, password } = req.body;

   try {
       const hashedPassword = await hashPassword(password);
       const user = new User({ name, email, password: hashedPassword });
       await user.save();

       res.status(201).json({ message: "User registered successfully" });
   } catch (error) {
       res.status(500).json({ error: "Server error" });
   }
});

export default router;
