const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicle = new Schema({
    vehicleId:{
        required:true,
        type:Number
    },
    vehicleVintage: {
        required: true,
        type: String
    },
    vehicleOld: {
        required: true,
        type: String
    },
    vehicleModern: {
        required: true,
        type: String
    },
})

const Vehicle = mongoose.model("vehicle",vehicle )

module.exports = Vehicle;