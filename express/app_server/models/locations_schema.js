/**
 * Created by mysterio86 on 25/12/16.
 */

var mongoose = require('mongoose');

var reviewsSchema = new mongoose().Schema({
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


var timingScheduleSchema = new mongoose().Schema({
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

// var x = {
//     name: 'Noise',
//     address: '250 Low Street, Reading, Whitefield',
//     distance: '120m',
//     facilities: [
//         'Beer',
//         'Non-Veg',
//         'Whiskey'
//     ],
//     rating: 5,
//     coordinates: [77.7499470, 12.9698000],
//     timings: [{
//         days: 'Monday - Friday',
//         opening: '7.00 am',
//         closing: '11.00 pm',
//         closed: false
//     },
//         {
//             days: 'Saturday',
//             opening: '8.00 am',
//             closing: '5.00 pm',
//             closed: false
//         },
//         {
//             days: 'Sunday',
//             closed: true
//         }]
//
// };
//
// var review = [{
//     author: 'Vijay Singh',
//     rating: 4,
//     reviewText: 'Good ambience, good food and nice location',
//     createdOn: Date.now()
// },
//     {
//         author: 'Fakir Singh',
//         rating: 5,
//         reviewText: 'Good food and drinks',
//         createdOn: Date.now()
//     }]
//

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