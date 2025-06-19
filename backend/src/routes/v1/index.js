const adminRouter = require('./admin-routes');
const userRouter = require('./user-routes');
const superAdminRouter = require('./super-admin-routes');
const express = require('express');

const router = express.Router();

router.use("/admin",adminRouter);
router.use("/user",userRouter);
router.use("/super-admin",superAdminRouter);

module.exports = router;