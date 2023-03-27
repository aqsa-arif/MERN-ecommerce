import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

const updatecategoryController =async (req, res) => {
    const {name} = req.body;

    try {
        const category = await categoryModel.findByIdAndUpdate(
            req.params.id,
            { name, slug: slugify(name) },
            {new: true}
        );
    
        res.send({
            success: true,
            message: 'Category Updated Successfully',
            category
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong, Please try again',
            error
        })
    }
   
}

export default updatecategoryController;