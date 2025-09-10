import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder, userOrder, verifyOrder, listOrder, updateStatus } from '../controller/orderController.js'

const orderRouter = express.Router();
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorder", authMiddleware, userOrder)
orderRouter.get("/list", listOrder)
orderRouter.post("/status", updateStatus)
export default orderRouter;