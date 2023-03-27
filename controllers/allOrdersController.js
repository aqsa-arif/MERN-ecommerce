import orderModel from "../models/orderModel.js";

const allOrdersController = async (req, res) => {    

    try { 
        const orders = await orderModel.find({})
        .populate('buyer', 'name')
        .populate('products', '-photo')
        .sort({createdAt: -1});    
    
        res.send({
            success: true,
            message: "All Orders Fetched",
            orders
        });
    
    } catch (error) {
        res.send({
            success:  false,
            message: "Internal Server errror",
            error
        })
    }
  

}
export default allOrdersController;