import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    products: {
        type: []
        // type: mongoose.ObjectId,
        // ref: 'products'
    },
    buyer: {
        type:  mongoose.ObjectId,
        ref: 'users'
    },
    payment: {},
    status: {
        type: String,
        default: "Not Process",
        enum: ["Not Process", "Processing","Shipping","Delivered","Cancel" ]
    }
},{ timestamps: true });

const orderModel = mongoose.model('orders', orderSchema);

export default orderModel;