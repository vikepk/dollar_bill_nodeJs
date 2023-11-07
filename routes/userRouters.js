const express=require('express');
const usersrouters=express.Router();
const controller=require('../controllers/userControllers');


usersrouters.get('/api/users',controller.get_users);

module.exports=usersrouters;
