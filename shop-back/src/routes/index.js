import express from "express";
import usersRouter from "./users";
import productsRouter from "./products";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../../swagger.json";
import mainRouter from "./main";

const router = express.Router();

router.use("/", mainRouter);
router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default router;