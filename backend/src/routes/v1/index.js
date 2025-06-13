const express = require('express');
const router = express.Router();

const userRoutes = require('./user-routes');  
const adminRoutes = require('./admin-routes');

router.use('/user', userRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
