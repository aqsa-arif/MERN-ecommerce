import productModel from "../models/productModel.js";

const allProductController = async (req, res) => { 

    try {   

        const products = await productModel.find()
        .select('-photo')
        .limit(4)
        .sort({createdAt: -1})   //Sort at descending order of creation means fetched products recently created 

        res.send({
            success: true,
            message: "All Product fetched",
            products
        });
    
    } catch (error) {
        res.send({
            success:  false,
            message: "Something went wrong, Please try again",
            error
        })
    }

}
export default  allProductController;

 