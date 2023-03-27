import productModel from '../models/productModel.js'

const  loadProducts = async (req, res) => {   
    // Remember => perpageProducts should be same as limit(noOfProducts) in first time productsload
    const perpageProducts = 4
    const page = req.params.page || 2

    try {
        const products = await productModel.find({})
        .select('-photo')
        .limit(perpageProducts)
        .skip((page - 1) * perpageProducts)
        .sort({createdAt: -1})

        res.send({
            success: true,
            products
        })
        
    } catch (error) {
        res.send({
            success: false,
            error
        })
    }

}
export default  loadProducts;