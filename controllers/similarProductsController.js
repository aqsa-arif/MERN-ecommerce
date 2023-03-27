import productModel from '../models/productModel.js'

const similarProductsController = async (req, res) => {
    const {pid, cid} = req.params

    try {
        const products = await productModel.find({
            category: cid,
            _id:{$ne: pid  }  //Get all documents same category except that productsdetail Product 
        }).select('-photo').limit(4).populate('category');

        res.send({
            success: true,
            message: 'Similar Products fetched',
            products
          })    
        
    } catch (error) {  
     res.status(500).send({
         success:  false,
         message: 'Internal server error',
         error
       })
    }
}

export default similarProductsController;