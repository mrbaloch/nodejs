var express = require('express');
var router = express.Router();
/*Controller Section*/
var mainCtrl = require('../controllers/main');
var locationsCtrl = require('../controllers/locations');
var othersCtrl = require('../controllers/others');
/*Controller Routing Linkage Section*/
/*Location Page Routing*/
router.get('/', locationsCtrl.homeList);
router.get('/location', locationsCtrl.locationInfo);
router.get('/location/review/new', locationsCtrl.addReview);
/*Others Page Routing*/
router.get('/others', othersCtrl.othersInfo);
router.get('/about', othersCtrl.aboutInfo);
module.exports = router;
