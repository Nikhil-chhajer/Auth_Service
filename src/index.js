const express=require('express');
const app=express();
const apiRoutes=require('./routes/index');
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const UserRepository=require('./repository/user-repository');
const prepareAndStartServer=async ()=>{
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({
              extended:true
       }));
       app.listen(PORT,()=>{
        console.log("Server Started at ",PORT);
       })
       app.use('/api',apiRoutes);
       const repo=new UserRepository();
       const response=await repo.getById(2);
       console.log(response);
}
prepareAndStartServer();
