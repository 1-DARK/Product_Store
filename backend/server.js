import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
dotenv.config();
const app = express();
app.use(express.json()); // allow us to accept the json data in the req.body
app.post("/api/products", async (req, res) => {
  const product = req.body; // user send this data
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all the fields",
    });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    return res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.log("Error in Create Product", error.message);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id); // Find and delete id
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
app.listen(3000, () => {
  connectDB(); // db connected
  console.log("Server start at http://localhost:3000");
});
