import express from "express"
import {connection} from "../Backend01/database/db.js"
import { router } from "./routes/userRoute.js";

const app = express();
const PORT = 8000;
// app.use(cors());
// app.use(express.json());
// app.use(router);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

app.get("/home",(req, res) => {
    const data = {message:"Welcome to home "}
    res.status(200).json(data)
})

app.get("/about",(req, res) => {
    const data = {message:"about hopehub"}
    res.status(200).json(data)
})

connection();