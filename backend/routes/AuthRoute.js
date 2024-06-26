import express from "express";
import { Login, logOut } from "../controllers/Auth.js";

const router = express.Router();

//LOGIN
router.post("/login", Login);
router.delete("/logout", logOut);

export default router;
