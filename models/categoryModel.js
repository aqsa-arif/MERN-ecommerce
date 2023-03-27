import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        lowercase: true
    }
})

const categoryModel = mongoose.model('categories', categorySchema);
export default categoryModel;