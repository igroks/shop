import express from "express";
import multerController from "../controllers/multer";

const router = express.Router();

router.post("/:id", multerController.uploadFile);

export default router;