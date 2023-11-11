const express=require('express');
const { write } = require('fs');
const mongoose=require("mongoose");

const Bill=require('./model/bill')
const bodyParser = require('body-parser');
const app=express();

const dbUri="mongodb://localhost:27017/bill";

const billrouters=require('./routes/billRouters');
const userrouters=require('./routes/userRouters');

app.use(express.json());
app.use(bodyParser.json());


mongoose.connect(dbUri).then((result)=>
{app.listen(3000);
console.log("Connection Made");
}
).catch((err)=>console.log(err));


app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
});

// app.delete('/api/:id',(req,res)=>{
//     console.log(id);
//     Bill.deleteOne({_id:req.params.id},function(err) {
//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.status(204).send(); // 204 No Content for successful deletion
//         }})
// })

app.use(billrouters); 
app.use(userrouters);


