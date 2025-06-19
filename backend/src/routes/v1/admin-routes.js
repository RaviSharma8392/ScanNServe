const express = require('express');
const {adminController} = require('../../controllers');
const router = express.Router();

router.post("/addProperty",adminController.addProperty);
router.delete("/deleteProperty",adminController.deleteProperty);
router.patch("/updateProperty",adminController.updateProperty);

router.post("/addItem",adminController.addItem);
router.patch("/updatePropertyName/:id",adminController.updatePropertyName)
router.delete("/deleteItem",adminController.deleteItem);
router.patch("/updateItem",adminController.updateItem);
router.patch("/toggleAvl",adminController.toggleAvl);
router.post("/addCat",adminController.addCategory);
router.delete("/deleteCat",adminController.deleteCategory);



module.exports = router;