import express from "express";
import usersRouter from "./routes/users";
import productsRouter from "./routes/products";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swagger.json";
import cookieParser from "cookie-parser";

require("dotenv").config();

const app = express();
const PORT = process.env.NODE_DOCKER_PORT;

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    if(!('unidade' in req.cookies)){
        res.cookie('unidade', 'Instituto de Computação');
        console.log('Created Cookie!');
    }else{
        console.log('There is already a cookie created!');
        console.log(req.cookies);
    }
    next();
})

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});