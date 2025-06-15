const express = require('express');
const router = express.Router();
const {superAdminController} = require("../../controllers");

router.post('/create-admin',superAdminController.createAdmin);
router.post('/delete-admin',superAdminController.deleteAdmin);
router.post('/disable-admin',superAdminController.disableAdmin);
router.post("/recharge-admin",superAdminController.rechargeAdmin);


module.exports = router;