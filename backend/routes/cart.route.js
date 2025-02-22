import express from 'express';
import { protectRoute } from '../middleware/auth.middleware';
import { addToCart, getCartProducts, removeAllFromCart, updateQuantity } from '../controllers/cart.controller';

const router = express.Router()

router.get('/', protectRoute, getCartProducts);
router.get('/', protectRoute, addToCart);
router.get('/', protectRoute, removeAllFromCart);
router.get('/:id', protectRoute, updateQuantity);


export default router