
const router = require("express").Router();

const stripe = require("stripe")('sk_test_51LYt4bLF9bdtREJ20lzM4n0O7Jk2AYbfHTQDdP2gT96TVLrm6rHY8qyaXUptSalL4SUDbYLiamG694JsmhblEWu800LS1i0Ez9');

    router.post("/payment", (req,res)=>{
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency:"usd",
        }, (stripeErr, stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else{
                res.status(200).json(stripeRes);
            }
        });
    });

module.exports =  router;