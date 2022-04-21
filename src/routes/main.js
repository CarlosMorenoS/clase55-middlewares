const express = require('express');
const router =express.Router();
const controller = require('../controllers/mainController');
const adminMiddlew = require('../middlewares/userMiddleware')
router.get('/', controller.index);
router.get('/admin', adminMiddlew, controller.admin);



module.exports = router;