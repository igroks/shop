import express from "express";
import usersController from "../controllers/users";

const router = express.Router();

router.get("/", usersController.index);
router.post("/", usersController.create);
router.get("/:id", usersController.read);
router.post("/:id", usersController.update);
router.delete("/:id", usersController.remove);

export default router;