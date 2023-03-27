import mongooose from 'mongoose';

const productSchema = mongooose.Schema({
    name: {
        type: String,
        required: true   
    },
    slug : {
        type: String,
        required: true,
        uniqure: true
    },
    description: {
        type: String,
        required: true   
    },
    price: {
        type:  Number,
        required: true   
    },
    photo: {
        data: Buffer,
        ContentType: String
    },
    category: {
        type:  mongooose.ObjectId,
        ref: "categories"
    },
    quantity: {
        type:  Number,
        required: true   
    },
    shipping: {
        type:  Boolean, 
    }

},{timestamps: true});


const productModel = mongooose.model('products', productSchema);

export default productModel;