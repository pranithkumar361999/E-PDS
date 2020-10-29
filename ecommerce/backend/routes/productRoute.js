const router=require('express').Router();
let Product=require("../models/productModel");

router.route('/add').post((req,res)=>{
    const name=req.body.name;
    const price=req.body.price;
    const image=req.body.image;
    const category=req.body.category;
    const countInStock=req.body.countInStock;
    const description=req.body.description;
    const newProduct=new Product({
        name,price,image,category,countInStock,description
        
    });
    newProduct.save()
    .then(()=>console.log("Product addedd"))
    .catch(err=>res.status(400).json('Error'+err))
});