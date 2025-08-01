import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(express.json()); // allow us to accept the json data in the req.body
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log("Error in fetching products", error.message);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
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
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body; // user send this data
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid Product id",
    });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    }); // Find and delete id
    console.log("YAA");
    return res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
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
    return res.status(200).json({
      success: true,
      message: "Product Deleted",
    });
  } catch (error) {
    console.log("Id not found");
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }
});
app.listen(3000, () => {
  connectDB(); // db connected
  console.log("Server start at http://localhost:3000");
});
