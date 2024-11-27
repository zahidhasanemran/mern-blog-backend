import { Request, Response } from "express";
import User from "../models/User";
import { hashPassword } from "../utils/auth";
import { generateToken } from "../utils/jwt";
import { comparePassword } from "../utils/auth";
import crypto from "crypto";

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const hashedPassword = await hashPassword(password);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        const token = generateToken(user.id);

        res.status(201).json({ message: "User registered", token });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};




export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = generateToken(user.id);
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};


export const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const resetToken = crypto.randomBytes(32).toString("hex");
        // Store the token securely, e.g., in the database with an expiration time.

        // Send an email to the user (mock email logic here).
        res.status(200).json({ message: `Reset token (mock): ${resetToken}` });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

