var mongoose = require('mongoose');
var location_model = mongoose.model('Locations');


// location_model.fin
var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsReadOne = function (req, res) {
    location_model
        .findById(req.params.locationId)
        .exec(function (err, location) {
            if (req.params && req.params.locationId) {
                if (!location) {
                    sendJsonResponse(res, 404, {"message": "No Location Information Found"});
                    return;
                }
                else if (err) {
                    sendJsonResponse(res, 404, {"message": "Error"});
                }
                sendJsonResponse(res, 200, location);
            } else {
                sendJsonResponse(res, 404, {"message": "No LocationId in the request!"})
            }
            // sendJsonResponse(res, 200, location);
        });
};

module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};