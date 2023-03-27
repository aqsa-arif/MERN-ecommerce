import productModel from "../models/productModel.js";

const  productProductController = async (req, res) => { 

    try {   

        const product = await productModel.findById(req.params.id).select('photo');
        // product is obj consisting photo and id keys 
        // then photo consisting data and ContentType keys
        if(product.photo.data){
            res.set('Content-type', product.photo.ContentType )
           return res.status(200).send(product.photo.data);
        }
    
    } catch (error) {
        res.send({
            success:  false,
            message: "Something went wrong, Please try again",
            error
        })
    }
  

}
export default  productProductController;

 