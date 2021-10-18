import express from "express";
import productsController from "../controllers/products";
import auth from "../utils/auth";

const router = express.Router();

router.get("/", productsController.index);
router.post("/", auth.verifyAuth, productsController.create);
router.get("/:id", productsController.read);
router.post("/:id", productsController.update);
router.delete("/:id", productsController.remove);
router.post("/upload-file/:id", productsController.uploadFile);

export default router;