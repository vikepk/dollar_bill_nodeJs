const express=require('express');
const { write } = require('fs');
const mongoose=require("mongoose");

const Bill=require('./model/bill')

const app=express();

const dbUri="mongodb://localhost:27017/bill";

const billrouters=require('./routes/billRouters');
const userrouters=require('./routes/userRouters');

app.use(express.json());



mongoose.connect(dbUri).then((result)=>
{app.listen(3000);
console.log("Connection Made");
}
).catch((err)=>console.log(err));


app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
});

app.use(billrouters); 
app.use(userrouters);


