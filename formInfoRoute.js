const formInfo=require('express').Router();
const mongo = require("./mongo");
const formInfoService=require("./services/formInfo.services");

formInfo.post('/formInfo',formInfoService.formInfoPost);
formInfo.get('/portfolioInfo',formInfoService.portfolioInfo);
formInfo.get('/delete',formInfoService.delete);

module.exports = formInfo;