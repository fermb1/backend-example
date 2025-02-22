import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware";
import { createProduct, deleteProduct, getAllProducts, getFeaturedProducts, getProductsByCategory, getRecommendedProducts, toggleFeaturedProduct } from "../controllers/product.controller";


const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.get("/:id", protectRoute, adminRoute, toggleFeaturedProduct);
router.get("/:id", protectRoute, adminRoute, deleteProduct);

export default router