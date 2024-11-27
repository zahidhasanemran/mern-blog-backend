import express from "express";
import { register } from "../controllers/authController"
import { login } from "../controllers/authController";
import { forgotPassword } from "../controllers/authController";



const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);


export default router;
