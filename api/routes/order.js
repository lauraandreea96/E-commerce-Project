const Order = require("../models/Order");
const { verifyToken, verifyTokenAuthorization, verifyTokenAndAdmin } = require("./verifyToken");


const router = require("express").Router();

//create
router.post("/", verifyToken, async(req,res)=>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

//update
router.put("/:id", verifyTokenAndAdmin, async (req,res)=>{

    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true}
    );
    res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

//delete 
router.delete("/:id", verifyTokenAndAdmin, async(req, res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted...")
    }catch(err){
        res.status(500).json(err);
    }
});

//get order by id
router.get("/find/:id", verifyTokenAndAdmin, async(req, res)=>{
  try{
     const order =  await Order.findById(req.params.id);
      res.status(200).json(order);
  }catch(err){
      res.status(500).json(err);
  }
});

//get all 
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

//get orders number
router.get("/count", async (req, res)=>{
  try{
      const list = await Order.countDocuments();
       res.status(200).json(list);
   }catch(err){
      res.status(500).json(err);
   }
});

module.exports = router;