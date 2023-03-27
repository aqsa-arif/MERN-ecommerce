import categoryModel from "../models/categoryModel.js";
import productModel from "../models/productModel.js";

const productsbyCategoryController =  async (req, res) => { 

    try {     
        const category = await categoryModel.findOne({slug: req.params.slug});
        const products = await productModel.find({category})
        .select('-photo')
        .populate('category');

        res.send({
            success: true,
            message: "All Products of Category fetched",
            category,
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
export default productsbyCategoryController