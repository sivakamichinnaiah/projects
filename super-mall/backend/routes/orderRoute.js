import express from 'express'
import {placeOrder, placeOrderUnion, placeOrderRazorpay, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

//Admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/union',authUser,placeOrderUnion)
orderRouter.post('/razor',authUser,placeOrderRazorpay)

// user features
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter