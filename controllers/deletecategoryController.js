import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

const  deletecategoryController = async (req, res) => { 

    try { 
        await categoryModel.findByIdAndDelete(req.params.id);
     
        res.send({
            success: true,
            message: 'Category Deleted Successfully' 
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error while deleting category, Please try again',
            error
        })
    }
   
}

export default deletecategoryController;