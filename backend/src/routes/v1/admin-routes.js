const express = require('express');
const {adminController} = require('../../controllers');
const router = express.Router();

router.post("/addProperty",adminController.addProperty);
router.delete("/deleteProperty/:id",adminController.deleteProperty);

router.post("/addItem",adminController.addItem);
router.patch("/updatePropertyName/:id",adminController.updatePropertyName)
router.delete("/deleteItem",adminController.deleteItem);
router.patch("/toggleAvl",adminController.toggleAvl);
router.post("/addCat",adminController.addCategory);
router.delete("/deleteCat",adminController.deleteCategory);



module.exports = router;