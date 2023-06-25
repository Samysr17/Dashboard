const express=require('express');
const {getalltrains}=require('./train.controller')
const trainrouter=express.Router();
trainrouter.get('/trains',getalltrains);
module.exports=trainrouter;

//server issue