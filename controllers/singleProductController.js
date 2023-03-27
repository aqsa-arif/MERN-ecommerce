 import productModel from "../models/productModel.js";

const   singleProductController = async (req, res) => { 

    try {   

        const product = await productModel.findOne(
            {slug: req.params.slug }).select('-photo').populate('category');
            // Populate filter to populate every field of foreign key field's document
        res.send({
            success: true,
            message: "Single Product fetched",
            product
        });
    
    } catch (error) {
        res.send({
            success:  false,
            message: "Something went wrong, Please try again",
            error
        })
    }
  

}
export default  singleProductController;

 