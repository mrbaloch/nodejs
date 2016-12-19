/* GET home page. */
module.exports.homeList = function (req, res) {
    // res.render('index', {
    //     title: 'Index : Express Application'
    // })
    res.render('locations-list', {title: 'Home'})
};
/* GET location home page. */
module.exports.locationInfo = function (req, res) {
    res.render('index', {
        'title': 'Locations : Express Application'
    })
};
/* GET location add review. */
module.exports.addReview = function (req, res) {
    res.render('index', {
        'title': 'Review : Express Application'
    })
};
