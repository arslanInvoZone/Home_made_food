const express = require('express');
const passport = require('passport');
const {getUser, registerUser, userAuth} = require('../controller/UserController')
const router = express.Router();

router.route('/payment').get(passport.authenticate('jwt',{session:false}),getUser)
router.route('/signup').post(registerUser)
router.route('/login').get(userAuth)

module.exports = router