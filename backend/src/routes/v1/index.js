const adminRouter = require('./admin-routes');
const userRouter = require('./user-routes');

const express = require('express');

const router = express.Router();

router.use("/",adminRouter);
router.use("/",userRouter);

module.exports = router;