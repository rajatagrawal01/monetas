const express=require('express');
const router=express.Router();
const controller=require('../controller/controller');
router.post('/monetas-transaction',controller.sendMonetas)
module.exports=router;