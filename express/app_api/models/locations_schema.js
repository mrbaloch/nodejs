/**
 * Created by mysterio86 on 25/12/16.
 */
var mongoose = require('mongoose');

var reviewsSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        "default": Date.now()
    }
});


var timingScheduleSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }

});

var locationSchema = new mongoose.Schema({
    name: {type: String, required: true},

    rating: {
        type: Number, "default": 0,
        min: 0, max: 5
    },
    facilities: [String],
    reviews: [reviewsSchema],
    timings: [timingScheduleSchema],
    coordinates: {
        type: Number,
        index: '2dsphere'
    }
});

//tell mongoose to compile model from schema
//model - model_name, schema, collection_name
mongoose.model('Locations', locationSchema, 'locations');

// db.locations.update({name: 'Noise'},
//     {
//         $push: {
//             reviews: {
//                 author: 'Vivek Singh',
//                 rating: 5,
//                 reviewText: 'Awesome Brewery and Location',
//                 createdOn: new Date("Dec 25, 2016")
//             }
//         }
//     })