import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

const createCategoryController = async(req, res) => {
       const {name} = req.body;

       const existingCategory = await categoryModel.findOne({name}); 
       if(existingCategory){
          return res.send({success: false , message: 'Category alredy exists'})
       }

       try {
        const category =  await categoryModel({
            name,
            slug: slugify(name)
         }).save();
  
         res.send({
           success: true,
           message: 'Category Created Sucessfully',
           category
         })

       } catch (error) {
        res.status(500).send({
            success:  false,
            message: 'Internal server error',
            error
          })
       }
      
}
 
export default createCategoryController;