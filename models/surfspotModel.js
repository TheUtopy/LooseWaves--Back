const mongoose = require('mongoose');
const surfspotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true,
    },
    surfBreak: {
        type: String,
        required: true,
    },
    //photo: {
    //type: Image,
    //required: false,
    //},
    seasonBegin: {
        type: Date,
        required: true,
    },
    seasonEnd: {
        type: Date,
        required: true,
    },
});

const surfspotModel = mongoose.model('surfspots', surfspotSchema);
module.exports = surfspotModel;