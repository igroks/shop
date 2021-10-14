import express from "express";
import productsController from "../controllers/products";

const router = express.Router();

router.get("/", productsController.index);
router.post("/", productsController.create);
router.get("/:id", productsController.read);
router.post("/:id", productsController.update);
router.delete("/:id", productsController.remove);
router.post("/upload-file/:id", productsController.uploadFile);

export default router;