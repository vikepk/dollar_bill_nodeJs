const { json } = require('express');
const Bill =require('../model/bill');


const get_data=(req,res)=>{
    Bill.find().sort({createdAt:-1}).then((result)=>res.send(result)).catch((err)=>console.log(err))

};


const send_data=(req,res)=>{
    console.log(req.body);
    const bill=new Bill(req.body);
    bill.save().then((result)=>{
        console.log(result);
        res.status(201).json(result);
    }).catch((err)=>console.log(err));
    };

    
const bill_details=(req,res)=>{
        const id1=req.params.id1;
        const id2=req.params.id2;
        console.log(id1,id2);
        //to find the id in the req.url
       Bill.find({email:id1,date:id2}).then((result)=>{
        //finding the blog using its id
        console.log(result);
        res.status(200);
        res.send(result);
       }).catch((err)=>console.log(err))
        
    };

module.exports={get_data,send_data,bill_details,bill_details}