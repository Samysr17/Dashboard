const http=require('http');
const PORT=process.env.PORT ||8000;
const app=require('./app')
console.log(PORT)
const server=http.createServer(app);
server.listen=(PORT,()=>{
    console.log(`Listening on PORT ${PORT}.....`)
});