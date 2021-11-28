import express from "express";
import productsController from "../controllers/products";
import auth from "../utils/auth";

const router = express.Router();

router.get("/", productsController.index);
router.post("/", auth.isCollaborator, productsController.create);
router.get("/:id", productsController.read);
router.post("/:id", auth.isCollaborator, productsController.update);
router.delete("/:id", auth.isCollaborator, productsController.remove);
router.post("/upload-file/:id", auth.isCollaborator, productsController.uploadFile);

export default router;