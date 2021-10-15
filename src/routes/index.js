import express from "express";
import usersRouter from "./users";
import productsRouter from "./products";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swagger.json";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default router;