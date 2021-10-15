import express from "express";
import routes from "./routes";

require("dotenv").config();

const app = express();
const PORT = process.env.NODE_DOCKER_PORT;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});