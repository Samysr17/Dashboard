const express=require('express');
const cors=require('cors');
const trainsrouter=require('./routes/Trains/Trains.router')
const app=express();


//middleware
app.use(cors({
    origin:"http://localhost:3000", //can use callback whenerver necessary mantain whitelist array
}));
app.use(express.json());
app.use(trainsrouter);
module.exports=app;
//traincsv to be uploaded
//need to work with sreams