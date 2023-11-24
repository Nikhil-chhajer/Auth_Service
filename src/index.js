const express=require('express');
const app=express();
const apiRoutes=require('./routes/index');
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const UserRepository=require('./repository/user-repository');
const UserService=require('./services/User-service');
const prepareAndStartServer=async ()=>{
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({
              extended:true
       }));
       app.listen(PORT,()=>{
        console.log("Server Started at ",PORT);
       })
       app.use('/api',apiRoutes);
       // const repo=new UserRepository();
       // const response=await repo.getById(2);
       // console.log(response);
        const service=new UserService();
       // const newtoken=service.createToken({
       //        email:" nikhil@admin.com ",
       //        id:1
       // });
       // console.log("new token is ",newtoken);
       // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiBuaWtoaWxAYWRtaW4uY29tICIsImlkIjoxLCJpYXQiOjE3MDAwMzA5NzYsImV4cCI6MTcwMDAzNDU3Nn0.2LqQSLCkkC_YxV46o38JL3TueiHYnK1cTLNflS3U6w4';
       // const response=service.verifyToken(token);
       // console.log(response);
}
prepareAndStartServer();
