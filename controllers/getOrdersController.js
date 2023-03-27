import orderModel from "../models/orderModel.js";

const getOrdersController = async (req, res) => {    

    try { 
        const order = await orderModel.find({buyer: req.user._id})
        .populate('buyer', 'name')
        .populate('products', '-photo')
        .sort({createdAt: -1});    
    
        res.send({
            success: true,
            message: "Order Fetched",
            order
        });
    
    } catch (error) {
        res.send({
            success:  false,
            message: "Internal Server errror",
            error
        })
    }
  

}
export default getOrdersController;