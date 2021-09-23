import express from "express"
import usersRouter from "./routes/users"
import productsRouter from "./routes/products"

require("dotenv").config()

const app = express();
const PORT = process.env.NODE_DOCKER_PORT;

app.use(express.json());
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});