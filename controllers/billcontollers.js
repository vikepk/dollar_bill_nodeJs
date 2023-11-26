const { json } = require('express');
const Bill =require('../model/bill');
const emailValidator = require('deep-email-validator');

async function isEmailValid(email) {
  return emailValidator.validate(email)
}
const all_data=(req,res)=>{
  try{
    Bill.find().sort({createdAt:-1}).then((result)=>res.status(200).send(result)).catch((err)=>console.log(err))
  
}
  catch(e){
    res.status(500).send({message:"Try Again"});
  }
};


const send_data=async (req,res)=>{
    console.log(req.body);
    let {email,expense,amt,date}=req.body;
    if(!email||!expense||!amt){
      res.status(400).send({message:"Details Missing"});
      
    }
    
  
    const bill=new Bill(req.body);
    const {valid, reason, validators} = await isEmailValid(email);
    if(valid){
    bill.save().then((result)=>{
        console.log(result);
        res.status(200).json(result);
    }).catch((err)=>{console.log(err);res.status(500).send({message:"Try again"})});
  }
  else{
    return res.status(400).send({
      message: "Please provide a valid email address.",
      
    })
  }
    };

    
const bill_details=(req,res)=>{
        const id1=req.params.id1;
        const id2=req.params.id2;
        console.log(id1,id2);
        if(!id1||!id2){
          res.status(400).send({message:"Missing Details"});
        }
        //to find the id in the req.url
       Bill.find({email:id1,date:id2}).then((result)=>{
        //finding the blog using its id
        console.log(result);
        res.status(200);
        res.send(result);
       }).catch((err)=>{console.log(err);res.status(500).send({message:"Try Again"})})
        
    };

const bill_del=async(req,res)=>{
    const id=req.params.id;
    if (!id1) {
      res.status(400).send({message:"Missing Details"});
    }
    //to find the id in the req.url

    try{
       const result= await Bill.deleteOne({_id:id});
       if(result.deletedCount===0){
        return res.status(404).json({ error: 'Bill not found' });
       }
       res.status(204).send();
    }
    catch(err){
    console.log(err);
    res.status(500).json({message:"Choose Expense"});

}
}
const bill_month_total=(req,res)=>{
    const id1=req.params.id1;
    const id2=req.params.id2;
    console.log(id1,id2);
    //to find the id in the req.url
    if(id2<=12&&id2>=1){
    Bill.find({
        $expr: {
          $eq: [{ $month: "$date" }, parseInt(id2)]
        }
      }).then((result)=>{
    //finding the blog using its id
    const totalAmount = result.reduce((sum, bill) => sum + bill.amt, 0);

    console.log(result);
    console.log("Total Amount:", totalAmount);
    res.status(200).json([{ totalAmount }]);
    //res.send.json({ totalAmount });
   }).catch((err) => {
    console.log(err);
    res.status(500).send({message:"Internal Server Error"});
  });
}
else{
  res.status(400).send({message:"Select Month Correctly"});
}
    
};

module.exports={all_data,send_data,bill_details,bill_details,bill_del,bill_month_total}