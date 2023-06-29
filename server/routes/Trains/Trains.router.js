const express=require('express');
const {getalltrains}=require('./Trains.controller')
const trainsrouter=express.Router();
trainsrouter.get('/trains',getalltrains);
module.exports=trainsrouter;