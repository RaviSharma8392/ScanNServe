const express=require("express")
const router=express.Router()
const adminItemRouter = require('./admin-items');
router.use('/', adminItemRouter);
module.exports = router;