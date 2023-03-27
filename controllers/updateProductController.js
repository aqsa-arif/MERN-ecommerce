import fs from 'fs';
import slugify from "slugify";
import productModel from "../models/productModel.js";

const  updateProductController = async (req, res) => {
    const {name, description, quantity, shipping, category, price} = req.fields;
    const {photo} = req.files;

    switch (true) {
        case !name:
            res.send({success: false, message: 'Product name is required' })            
    
        case !description:
            res.send({success: false, message: 'Product description is required' })            
        
        case !quantity:
            res.send({success: false, message: 'Product quantity is required' })            
          
        case !category:
            res.send({success: false, message: 'Product category is required' })            
         
        case !price:
            res.send({success: false, message: 'Product price is required' })            
         
        case !photo || photo.size > 100000 :
            res.send({success: false, message: 'Product Photo is required and must be less than 1mb in size' })   
    }

    try {    
        const product = await productModel.findByIdAndUpdate(
                req.params.pid,
                {...req.fields, slug: slugify(name) },
                {new:  true }        
        );
        if(photo){
            console.log('Photo updated not');
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type
        }
    
        res.send({
            success: true,
            message: "Product updated Successfully",
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
export default  updateProductController;

 