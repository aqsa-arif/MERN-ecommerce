import productModel from '../models/productModel.js'

const searchProductsController = async (req, res) => {   
    const {keyword} = req.params;    
    try {
        const result = await productModel.find({
            $or: [
                {name: { $regex: keyword, $options: "i" }  },
                {description: { $regex: keyword, $options: "i" }  }
            ]
            // $regex pattern so it search from end => postfix as default is prefix
        }).select('-photo')

        res.send(result) 
        
    } catch (error) {
        res.send({
            success: false,
            message: "Error in Searching",
            error
        })
    }

}
export default searchProductsController;