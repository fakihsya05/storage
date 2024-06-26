import express from "express";
import { getAllCategories} from "../controllers/Categories.js";
import { verifyUser } from "../middleware/AuthUser.js";
const router = express.Router();

router.get("/categories", verifyUser, getAllCategories);


export default router;
