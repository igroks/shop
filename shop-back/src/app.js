import express from "express";
import routes from "./routes";
import { v4 as uuid } from "uuid";
import session from "express-session";
import cors from "cors";

require("dotenv").config();

const app = express();
const PORT = process.env.NODE_DOCKER_PORT;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(session({
  genid: () => {
    return uuid();
  },
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});