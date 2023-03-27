import fs from 'fs';

import slugify from "slugify";
import productModel from "../models/productModel.js";

const createProductController = async (req, res) => {
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

        case !shipping:
            res.send({success: false, message: 'Product price is required' })            
         
        case !photo || photo.size > 100000 :
            res.send({success: false, message: 'Product Photo is required and must be less than 1mb in size' })      
    }

    try { 
        const product = await productModel({...req.fields, slug: slugify(name) });
        if(photo){
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type
        }
        await product.save();
    
        res.send({
            success: true,
            message: "Product created Successfully",
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
export default createProductController