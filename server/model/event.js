var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    //subHeading: {type: String},
    description: {type: String, required: true},
    price: {type: String, required: true},
    language: {type: String},
    date: {type: String, required: true},
    //time: {type: String, required: true},
    //location: {type: String, required: true},
    speakerImageUrl: {type: String, required: true},
    speakerFullName: {type: String, required: true},
    speakerDescription: {type: String},
    speakerEmail: {type: String},
    speakerPhone: {type: String}
});

module.exports = mongoose.model('Seminars', eventSchema);