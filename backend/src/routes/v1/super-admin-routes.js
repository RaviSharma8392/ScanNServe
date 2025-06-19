const express = require('express');
const router = express.Router();
const {superAdminController} = require("../../controllers");
const {validate} = require('../../utils');
//super admin middleware will be used here, it will check if the token exists. If yes, than 
router.post('/create-admin',validate.validateSignUp,superAdminController.createAdmin);
router.post('/delete-admin',superAdminController.deleteAdmin);
router.post('/disable-admin',superAdminController.disableAdmin);
router.post("/recharge-admin",superAdminController.rechargeAdmin);


module.exports = router;