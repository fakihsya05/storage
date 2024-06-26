import express from "express";
import multer from "multer";
import { Register, uploadImage } from "../controllers/Users.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

// Konfigurasi multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// Endpoint untuk register user
router.post("/register", Register);

// Endpoint untuk upload image berdasarkan ID user
router.put("/upload/:id", verifyUser, upload.single('image'), uploadImage);

export default router;
