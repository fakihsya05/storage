import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";
import { verifyUser } from "../middleware/AuthUser.js";


const router = express.Router();

router.get("/products", verifyUser, getAllProducts);
router.get("/products/:id", verifyUser, getProductById);
router.delete("/products/:id", verifyUser, deleteProduct);
router.post("/products", verifyUser, createProduct);
router.put("/products/:id",verifyUser, updateProduct);

export default router;
