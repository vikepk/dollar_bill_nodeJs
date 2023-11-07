const mongoose = require('mongoose');

const Schema=mongoose.Schema();
//Mongoose Schema

//structure of type of data document
const UserSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   
},{timestamps:true});
//Consits of title ,snippet ,body and timestamps

const User =mongoose.model('user',UserSchema);

module.exports=User;