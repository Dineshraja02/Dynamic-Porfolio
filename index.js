require("dotenv").config();
const express = require('express');
const app =express();
const userRoute = require('./userRouter');
const cors= require('cors');
const mongo = require('./mongo');
const jwt = require('jsonwebtoken');
const formInfo= require("./formInfoRoute");



(async ()=>{
    try {
        await mongo.connect();

        app.use(express.json());

        app.use(cors());

        app.use("/api",userRoute);

        app.use((req,res,next)=>{
            var token=req.headers["auth"];
            console.log(token)
            try{
            if (token){
                req.user=jwt.verify(JSON.parse(token),process.env.authpass);
                console.log(req.user);
                next();
            }else{
                res.sendStatus(401);
            }
            }catch(error){
            console.log(error);
        }                
         });

        app.use("/Info",formInfo);

        app.listen(process.env.Port,()=>{
            console.log("server connected Successfully");
        })
                
            } catch (error) {
                console.error(error)
            }
})();

