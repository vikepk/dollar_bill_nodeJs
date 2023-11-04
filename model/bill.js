const mongoose = require('mongoose');

const Schema=mongoose.Schema();
//Mongoose Schema

//structure of type of data document
const BillSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    expense:{
        type:String,
        required:true
    },
    amt:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    }
},{timestamps:true});
//Consits of title ,snippet ,body and timestamps

const Bill =mongoose.model('bill',BillSchema);

module.exports=Bill;