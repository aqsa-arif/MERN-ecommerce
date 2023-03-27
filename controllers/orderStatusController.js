import orderModel from "../models/orderModel.js";

const orderStatusController = async(req, res) => {
    try {
        const order = await orderModel.findByIdAndUpdate(
            req.params.id,
            {status: req.body.status },
            {new: true}
         )
         res.send({
             success: true,
             message: "Order updated",
             order
         })

    } catch (error) {
          res.send({
             success: false,
             message: "Failed to Update Order ",
            error
         })
    }
   
}
export default orderStatusController;