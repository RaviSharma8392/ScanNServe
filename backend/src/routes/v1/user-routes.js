const express = require('express');
const { userController } = require('../../controllers');
const router = express.Router();


router.post("/signIn",userController.signIn);

module.exports = router;