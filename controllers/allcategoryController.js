import categoryModel from "../models/categoryModel.js";

const allcategoryController = async (req, res) => {

    try {
        const categories = await categoryModel.find();
        res.send({
            success: true,
            message: 'All categories',
            categories
        })

    } catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong, Please try again',
            error
        })
    }
}

export default allcategoryController;