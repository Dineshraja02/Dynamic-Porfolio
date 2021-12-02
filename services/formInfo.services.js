const db = require("../mongo");
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');

const formInfoService = {
    async formInfoPost(req,res) {
        try {
            console.log(req.user)
            const {insertedid:_id}= await db.portfolio.insertOne({...req.body,userId:req.user.userId})
            res.status(200).send(req.body)        
        } catch (error) {
            res.sendstatus(500);
        }
    },
    async portfolioInfo(req,res){
        try {
            const data = await db.portfolio.findOne({userId:req.user.userId});
            res.status(200).send(data);
        } catch (error) {
           console.log(error);
        }
    },
    async delete(req,res){
        try {
            const data = await db.portfolio.deleteOne({userId:req.user.userId});
            res.status(200).send(data);
        } catch (error) {
           console.log(error);
        }
    } 
}



module.exports = formInfoService;