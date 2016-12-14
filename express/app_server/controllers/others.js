/* GET home page. */
module.exports.aboutInfo = function (req, res) {
    res.render('index', {
        title: 'About : Express Application'
    })
};