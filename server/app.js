const express=require('express');
const trainsrouter=require('./routes/Trains/Trains.router')
const app=express();


//middleware
app.use(express.json());
app.use(trainsrouter);
module.exports=app;