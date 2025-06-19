const express = require('express');
const { userController } = require('../../controllers');
const router = express.Router();


router.post("/signIn",userController.signIn);
router.post("/signOut",userController.signOut);
module.exports = router;