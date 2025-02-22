import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";


import authRoutes from './routes/auth.route.js';
import productRoutes from "./routes/product.routes.js"
import cartRoutes from "./routes/cart.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const __dirname  = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);


app.listen(PORT, () => {
    console.log("server is running on http://localhost:" + PORT);
    connectDB()
})