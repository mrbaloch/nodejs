/* GET home page. */
var home_object = {
  title: 'Loc8r',
  side_title: 'Loc8r helps you to find the places to work when out and about',
  title_element: {
    name: 'Loc8r',
    desc: 'Find the places to work with wifi near you'
  },
  locations_list: [{
    name: 'StarCups',
    address: '124 High Street, Reading, Marathalli',
    distance: '120m',
    items: [
      'Veg Food',
      'Non-Veg Food',
      'Hot-n-Cold Drinks'
    ],
    rating: 5
  }, {
    name: 'StarMugs',
    address: '124 High Street, Reading, Marathalli',
    distance: '120m',
    items: [
      'Hot Drinks',
      'Cold Drinks',
      'Hot-n-Cold Drinks'
    ],
    rating: 4
  }, {
    name: 'StarBottles',
    address: '124 High Street, Reading, Marathalli',
    distance: '120m',
    items: [
      'Fish',
      'Shark'
    ],
    rating: 3
  }]
};

module.exports.homeList = function(req, res) {
  // res.render('index', {
  //     title: 'Index : Express Application'
  // })
  res.render('locations-list', home_object)
};
/* GET location home page. */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', home_object)
};
/* GET location add review. */
module.exports.addReview = function(req, res) {
  res.render('location-review', {
    'title': 'Review : Express Application'
  })
};
