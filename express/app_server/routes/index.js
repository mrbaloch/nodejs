var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
router.get('/', ctrlMain.homepageController);
router.get('/help', ctrlMain.helppageController);
module.exports = router;