import express from 'express';
import formidable  from 'express-formidable'
import allProductController from '../controllers/allProductsController.js';
import createProductController from '../controllers/createProductController.js';
import deleteProductController from '../controllers/deleteProductController.js';
import filterProductController from '../controllers/filterProductController.js';
import loadProducts from '../controllers/loadProducts.js';
import productPhotoController from '../controllers/productPhotoController.js';
import productsbyCategoryController from '../controllers/productsbyCategory.js';
import productsCountController from '../controllers/productsCountController.js';
import searchProductsController from '../controllers/searchProductsController.js';
import similarProductsController from '../controllers/similarProductsController.js';
import singleProductController from '../controllers/singleProductController.js';
import updateProductController from '../controllers/updateProductController.js';  
import adminaccess from '../middlewares/adminaccess.js';
import registeredUser from '../middlewares/registeredUser.js';  

const router = express.Router();

router.post('/create-product', registeredUser, adminaccess, formidable() ,createProductController );

router.put('/update-product/:id', registeredUser, adminaccess,formidable() ,updateProductController );

router.delete('/delete-product/:id', registeredUser, adminaccess, deleteProductController );

router.get('/all-products', registeredUser, allProductController );

router.get('/single-product/:slug', registeredUser, singleProductController );

router.get('/product-photo/:id',productPhotoController );

router.post('/products-filter', filterProductController );

router.get('/products-load/:page', loadProducts );

router.get('/products-count', productsCountController );

router.get('/products-search/:keyword', searchProductsController );

router.get('/similar-products/:pid/:cid',  similarProductsController );

// All products of one specific category specified by slug
router.get('/oneCategory-products/:slug',  productsbyCategoryController );




export default router;