const express=require('express');

const billrouters=express.Router();
const controller=require('../controllers/billcontollers');

billrouters.delete('/api/bill/:id',controller.bill_del);


billrouters.get('/api/get_data',controller.get_data);

billrouters.post('/api/send_data',controller.send_data);

billrouters.get('/api/today/:id1/:id2',controller.bill_details);

billrouters.get('/api/month/:id1/:id2',controller.bill_month_total);



module.exports=billrouters; 