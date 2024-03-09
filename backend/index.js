const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//db connection
mongoose.connect(
  "mongodb+srv://Ganesh:Ganesh1234@cluster0.7lqpit5.mongodb.net/Eshop-mern"
);

//api creation
app.get("/", (req, res) => {
  res.send("Server conneceted");
});

const storage = multer.diskStorage({
  destination: "./Upload/image",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
app.listen(port, (error) => {
  if (!error) {
    console.log("server running " + port);
  } else {
    console.log(error);
  }
});

const upload = multer({ storage: storage });
//creating upload img
app.use("/images", express.static("Upload/image"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});
//api endpoint

//product schema
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  Available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product = products.slice(-1);
    let last_pro = last_product[0];
    id = last_pro.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("saved");

  res.json({
    success: true,
    name: req.body.name,
  });
});


//deleted product api

app.post("/removeproduct",async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed")
    res.json({
        success:true,
        name:req.body.name,
    })
})

//get all products


app.get("/getallproducts",async(req,res)=>{
    let products=await Product.find({});
    console.log("All product ")
    res.send(products)
})

//user schema

const Users=mongoose.model("Users",{
  name:{
    type:String
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }
})

app.post('/signup',async(req,res)=>{
 let check=await Users.findOne({email:req.body.email});
 if(check){
  return res.status(400).json({success:false,error:"existing user found"})
 }
 let cart={};
 for (let i = 0; i < 300; i++) {
  cart[i]=0;
  
 }
 const user=new Users({
  name:req.body.username,
  email:req.body.email,
  password:req.body.password,
  cartData:cart,

 })
 await user.save();

 const data={
  user:{
    id:user.id
  }
 }
 const token=jwt.sign(data,'secret_ecom');
 res.json({success:true,token})

})

//createing end point userlogin

app.post('/login',async(req,res)=>{
  let user=await Users.findOne({email:req.body.email});

  if(user){
    const passcompare=req.body.password===user.password;
    if(passcompare){
      const data={
        user:{
          id:user._id
        }
      }
      const token=jwt.sign(data,'secret_ecom');
      res.json({success:true,token})
    }else{
      res.json({success:false,error:"Wrong password"})
    }
  }else{
    res.json({success:false,error:"Wrong email id"})
  }
})


///new collection

app.get('/newcollection',async(req,res)=>{
  let product=await Product.find({});
  let newcollection=product.slice(1).slice(-8);
  res.send(newcollection);  

})

app.get('/popular',async(req,res)=>{
  let product=await Product.find({category:"women"});
  let newcollection=product.slice(1).slice(-4);
  res.send(newcollection);  

})

//creating middleware

const fetchuser=async(req,res,next)=>{
  const token=req.header('auth-token');
  if(!token){
    res.status(401).send({error:"pleasse authenticate"})
  }else{
    try{
      const data=jwt.verify(token,'secret_ecom');
      req.user=data.user;
      next();
    }catch(error){
      res.status(401).send({error:"pleasse authenticate"})
    }
  }
}

app.post('/addtocart',fetchuser,async(req,res)=>{
 
  let userdata=await Users.findOne({_id:req.user.id});
  userdata.cartData[req.body.itemId]+=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData})
  res.send("Added")

})

app.post('/removetocart',fetchuser,async(req,res)=>{
 
  let userdata=await Users.findOne({_id:req.user.id});
  if( userdata.cartData[req.body.itemId]>0){
  userdata.cartData[req.body.itemId]-=1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData})
  res.send("removed")
  }

})

app.post('/getcart',fetchuser,async(req,res)=>{
 
  let userdata=await Users.findOne({_id:req.user.id});
  res.json(userdata.cartData);
 

})