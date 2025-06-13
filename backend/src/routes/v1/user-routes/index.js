const express = require("express")
const router=express.Router()
const userRouter = require('./user-auth');

router.use('/', userRouter);

module.exports = router;
