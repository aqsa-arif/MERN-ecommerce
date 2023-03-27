import express from 'express';  
import registeredUser from '../middlewares/registeredUser.js';
import { braintreePaymentController, braintreeTokenController }
from '../controllers/braintreeControllers.js';
import adminaccess from '../middlewares/adminaccess.js';
import getOrdersController from '../controllers/getOrdersController.js';
import allOrdersController from '../controllers/allOrdersController.js';
import orderStatusController from '../controllers/orderStatusController.js';

const router = express.Router();


router.get('/Braintree-token', braintreeTokenController );

// Will create order in db also after sucessfull payment 
router.post('/Braintree-payment', registeredUser, braintreePaymentController );
 
router.get('/order', registeredUser, getOrdersController );

router.get('/all-orders', registeredUser, adminaccess ,allOrdersController );

router.put('/order-status/:id', registeredUser, adminaccess , orderStatusController );

export default router;