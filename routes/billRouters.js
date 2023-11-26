const express=require('express');
const winston = require('winston');
const LogzioWinstonTransport = require('winston-logzio');

const logzioWinstonTransport = new LogzioWinstonTransport({
  level: 'info',
  name: 'winston_logzio',
  token: '<<LOG-SHIPPING-TOKEN>>',
  host: '<<LISTENER-HOST>>',
});

const billrouters=express.Router();
const controller=require('../controllers/billcontollers');

billrouters.delete('/api/bill/:id',controller.bill_del);


billrouters.get('/api/bills/data',controller.all_data);

billrouters.post('/api/bill/data',controller.send_data);

billrouters.get('/api/today/:id1/:id2',controller.bill_details);

billrouters.get('/api/month/:id1/:id2',controller.bill_month_total);

const logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [logzioWinstonTransport],
});

logger.log('warn', 'Just a test message');

module.exports=billrouters; 