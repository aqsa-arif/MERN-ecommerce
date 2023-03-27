import categoryModel from "../models/categoryModel.js";

const singlecategoryController = async(req, res) => { 

    try {        
    const category = await categoryModel.find({slug: req.params.slug});
    res.send({
        success: true,
        message: 'Single category Products',
        category
    })

    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong, Please try again',
            error
        })
    }
}

export default singlecategoryController;