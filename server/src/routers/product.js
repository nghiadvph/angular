import express from "express";
import {
  createProduct,
  getProductByid,
  getProducts,
  removeProduct,
  updateProduct,
} from "../controllers/product";
const router = express.Router();

router.get("/products", getProducts);

router.get("/products/:id", getProductByid);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", removeProduct);

export default router;

// In app.js
