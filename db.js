var mongoose=require('mongoose');
mongoose.connect("mongodb+srv://anshikaa22:anshika@cluster0.puyw8f3.mongodb.net/db6?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
 console.log("connected to db")
})
.catch((err)=>{console.log(err)})