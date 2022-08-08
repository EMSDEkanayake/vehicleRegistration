var express = require('express');
const vehicleModel = require('../models/vehicle');
var router = express.Router();
const auth = require("../middleware/auth");

//add details
router.post('/add-details',auth, function (req, res, next) {
  
    const bloodbag = new vehicleModel({
      vehicleId: req.body.vehicleId,
      vehicleVintage: req.body.vehicleVintage,
      vehicleOld: req.body.vehicleOld,
      vehicleModern: req.body.vehicleModern,
    });
  
    try {
  
      bloodbag.save();
      res.status(200).json(
        {
          succuss: true,
          message: 'Insertion succussfull',
          payload: {}
        }
      );
  
    }
    catch (error) {
      res.status(400).json(
        {
          message: 'Cannot add data right now!'
        }
      );
    }
  
  });

  module.exports = router;