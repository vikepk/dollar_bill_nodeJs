const {createLogger,transports,format}=require('winston');
const winston = require('winston/lib/winston/config');
const customformat=format.combine(format.timestamp(),format.printf((info)=>{
    return `${info.timestamp}[${info.level.toUpperCase().padEnd(7)}] - ${info.message}`
})),
logger=createLogger({
    format:customformat,
    level:"silly",
    transports:[
    new transports.File({filename:"app.log"}),
    new transports.Console()
]});

module.exports=logger;