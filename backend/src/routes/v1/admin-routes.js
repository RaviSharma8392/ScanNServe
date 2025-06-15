const express = require('express');
const {adminController} = require('../../controllers');
const router = express.Router();

router.post("/addItem",adminController.addItem);
router.delete("/deleteItem",adminController.deleteItem);
router.patch("/updateItem",adminController.updateItem);
router.patch("/toggleAvl",adminController.toggleAvl);
router.post("/addCat",adminController.addCategory);
router.delete("/deleteCat",adminController.deleteCategory);



module.exports = router;