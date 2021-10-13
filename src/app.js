import express from "express";
import usersRouter from "./routes/users";
import productsRouter from "./routes/products";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swagger.json";
import multerRouter from "./routes/multer";

require("dotenv").config();

const app = express();
const PORT = process.env.NODE_DOCKER_PORT;

app.use(express.json());
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/upload-file", multerRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});