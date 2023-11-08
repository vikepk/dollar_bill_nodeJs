

const User=require('../model/users');


const get_users=(req,res)=>{

    const user=new User(req.body);
    user.save().then((result)=>{ 
        console.log(result);
        res.status(201).json(result);
    }).catch((err)=>console.log(err))
    
};



module.exports={get_users};