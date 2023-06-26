const express=require('express');
const app=express();
const trainrouter=require('./routes/trains/train.router')
//express middleware:getting requests from client
app.use(express.json());
app.use(trainrouter);
 
module.exports = app;
