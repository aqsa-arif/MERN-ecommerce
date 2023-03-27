import productModel from "../models/productModel.js";

const   deleteProductController = async (req, res) => {
    
    try {    
       await productModel.findByIdAndDelete(req.params.id).select('-photo');
    
        res.send({
            success: true,
            message: "Product deleted Successfully", 
        });
    
    } 
    catch (error) {
        res.send({
            success:  false,
            message: "Something went wrong, Please try again",
            error
        })
    }  

}
export default deleteProductController;

 