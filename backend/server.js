import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express();
app.get("/products", (req, res) => {
  res.send("Server is Ready");
});

app.listen(3000, () => {
  connectDB(); // db connected
  console.log("Server start at http://localhost:3000");
});
