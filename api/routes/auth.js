const router = require("express").Router();
const User = require("../models/User");
const CryptoJS =require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        phone: req.body.phone,
        img: req.body.img,
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err){
        res.status(500).json(err);
    }
});

//login
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user){
            return res.status(401).json("Wrong user credentials");
        }
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if( Originalpassword !== req.body.password){
            return res.status(401).json("Wrong password credentials");
        }
        //json web token
        const accessToken = jwt.sign({
            id: user.id, 
            isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SEC,
        {expiresIn: "3d"}
        );
        //don't show password
        const {password , ...others} = user._doc;
        return res.status(200).json({...others, accessToken});
    }catch(err){
        return res.status(500).json(err);
        
    }
});
module.exports = router;