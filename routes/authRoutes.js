import express from 'express';
import signupController from '../controllers/signupController.js'
import loginController from '../controllers/loginController.js';
import registeredUser from '../middlewares/registeredUser.js';
import adminaccess from '../middlewares/adminaccess.js';
import forgotPassword from '../controllers/forgotPassword.js';
import profileUpdateController from '../controllers/profileUpdateController.js';

const router =  express.Router();

router.post('/signup', signupController);
router.post('/login',  loginController);
router.put('/forgotPassword', forgotPassword )

router.put('/profile', registeredUser , profileUpdateController );

// Check if user is logedin to system then can access Dashboard or etc 
router.get('/userApproach', registeredUser, (req, res) => {
    res.send({ok: true})
})

// Check if logedin user is admin so can access AdminDashboard 
router.get('/adminApproach', registeredUser, adminaccess, (req, res) => {
    res.send({ok: true})
})

export default router ;