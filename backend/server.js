import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import mainRouter from "./routes/index.js"
import cors from "cors"

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send("hello");
});

app.use('/api/v1',mainRouter);

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
