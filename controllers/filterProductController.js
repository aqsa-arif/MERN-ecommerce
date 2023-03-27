import productModel from '../models/productModel.js'

const filterProductController = async (req, res) => {
    const {check, radio } = req.body;

    let args = {}
    if(check.length > 0)  args.category = check
    if(radio)   args.price = { $lte: radio }
    console.log(args);

    try {
        let products = await productModel.find(args);
        res.send({
            success: true,
            message: "Products Filtered",
            products 
        })
        
    } catch (error) {
        res.send({
            success: false,
            message: "Internal server error",
            error
        })
    }
}

export default filterProductController;