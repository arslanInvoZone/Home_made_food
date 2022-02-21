const express = require('express');
const { getAllMeals, updatedMeal, getAllMenus, deleteMenu, addMenu, subscribers } = require('../controller/MenuController');

const router = express.Router();

router.route('/meals').get(getAllMeals)
router.route('/meals/:id').put(updatedMeal)
router.route('/').get(getAllMenus)
router.route('/delete').post(deleteMenu)
router.route('/add').post(addMenu)
router.route('/subscribers').get(subscribers)
module.exports = router