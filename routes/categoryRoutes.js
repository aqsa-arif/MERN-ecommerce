import  express from "express";
import allcategoryController from "../controllers/allcategoryController.js";
import createCategoryController from "../controllers/createCategoryController.js";
import singlecategoryController from "../controllers/singlecategoryController.js";
import updatecategoryController from "../controllers/updatecategoryController.js";
import deletecategoryController from "../controllers/deletecategoryController.js";
import adminaccess from "../middlewares/adminaccess.js";
import registeredUser from "../middlewares/registeredUser.js";

const router = express.Router()

router.post('/create-category', registeredUser, adminaccess, createCategoryController);

router.get('/single-category/:slug', singlecategoryController);

router.get('/all-category', allcategoryController );

router.put('/update-category/:id', registeredUser, adminaccess, updatecategoryController );

router.delete('/delete-category/:id', registeredUser, adminaccess, deletecategoryController );


export default router;
