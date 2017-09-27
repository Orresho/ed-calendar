var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required},
    imageUrl: {type: String, required},
    subHeading: {type: String},
    description: {type: String, required},
    price: {type: String, required},
    language: {type: String},
    date: {type: String, required},
    time: {type: String, required},
    location: {type: String, required},
    speakerImageUrl: {type: String, required},
    speakerFullName: {type: String, required},
    speakerDescription: {type: String},
    speakerEmail: {type: String},
    speakerPhone: {type: String}
});

module.exports = mongoose.model('events', schema);