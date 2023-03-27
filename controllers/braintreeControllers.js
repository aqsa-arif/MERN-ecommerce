import braintree from 'braintree'
import dotenv from 'dotenv';
import orderModel from '../models/orderModel.js';
import productModel from '../models/productModel.js';

dotenv.config();

var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.Merchant_ID,
    publicKey: process.env.Public_Key,
    privateKey: process.env.Private_Key,
});

export const braintreeTokenController = async (req, res) => {
    try {
        gateway.clientToken.generate({}, function (err, response) {
            if (err) {
                res.send(err)
            } else {
                res.send(response);
            }
        })

    } catch (error) {
        console.log(error);
    }
}

export const braintreePaymentController = async (req, res) => {
    try {
        const { cart, nonce } = req.body;

        const total = cart.reduce((prev, currentProd) => {
            return prev + currentProd.price
        }, 0)
 

        console.log("Total: "+ total);
        gateway.transaction.sale(
            {
                amount: total,
                paymentMethodNonce: nonce,
                options: {
                    submitForSettlement: true,
                },
            },
            async function (err, result) {
                if (err) {
                    console.log('Errorrrrrrrrrrrrrrrrrrrrrrrrr in Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
                    console.error(err); 
                    return;
                }

                if (result) {
                    const order = await orderModel({
                        products: cart,
                        payment: result,
                        buyer: req.user._id,
                    }).save();

                    res.send({
                        success: true,
                        order
                    }) 

                } else {
                    console.error(result.message);
                }
            }
        );

    } catch (error) {
        res.send({
            success: false,
            message: 'Internal Server error'
        })
    }
}