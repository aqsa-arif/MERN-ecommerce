import productModel from '../models/productModel.js'

const productsCountController = async (req, res) => {   
    try {
        const total = await productModel.find({}).estimatedDocumentCount();
        res.send({
            success: true,
            total
        })
        
    } catch (error) {
        res.send({
            success: false,
            message: "Internal Server error",
            error
        })
    }

}
export default productsCountController;