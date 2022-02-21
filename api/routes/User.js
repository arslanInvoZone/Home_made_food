const express = require('express');
const passport = require('passport');
const {getUser, registerUser, userAuth, getAllInvoices, userSubmenu} = require('../controller/UserController')
const router = express.Router();

router.route('/payment').get(passport.authenticate('jwt',{session:false}),getUser)
router.route('/signup').post(registerUser)
router.route('/login').post(userAuth)
router.route('/payments').get(getAllInvoices)
router.route('/subscribe').post(userSubmenu)
module.exports = router