import express from "express"
import usersRoutes from "./routes/users"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", usersRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});