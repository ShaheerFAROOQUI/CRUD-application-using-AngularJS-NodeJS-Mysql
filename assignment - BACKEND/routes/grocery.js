
const groceryController = require('../controllers/grocery');
const express = require('express');
const router = express.Router();
router.get('/', groceryController.getAllGroceries);
router.post('/', groceryController.postGrocery);
router.put('/', groceryController.putGrocery);

module.exports = router;
