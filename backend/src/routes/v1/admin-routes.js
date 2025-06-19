const express = require('express');
const {adminController} = require('../../controllers');
const adminAuth = require('../../middlewares/adminMiddleWare');
const router = express.Router();

router.use(adminAuth)
router.post("/addProperty",adminController.addProperty);
router.delete("/deleteProperty/:id",adminController.deleteProperty);

router.post("/addItem",adminController.addItem);
router.patch("/updateProperty/:id",adminController.updateProperty)
router.delete("/deleteItem",adminController.deleteItem);
router.patch("/toggleAvl",adminController.toggleAvl);
router.post("/addCat",adminController.addCategory);
router.delete("/deleteCat",adminController.deleteCategory);



module.exports = router;