const express=require('express');
const app=express();
const apiRoutes=require('./routes/index');
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const prepareAndStartServer=async ()=>{
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({
              extended:true
       }));
       app.listen(PORT,()=>{
        console.log("Server Started at ",PORT);
       })
       app.use('/api',apiRoutes);
}
prepareAndStartServer();
