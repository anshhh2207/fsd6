var mongoose=require('mongoose');
const router = require ('../routes/userRoute');
var userSchema=mongoose.Schema({
    pName:String,
    pQuantity:Number,
    pPrice:Number,
    pBrand:String,
  
})
var productModel=mongoose.model("product",userSchema)
module.exports=productModel;