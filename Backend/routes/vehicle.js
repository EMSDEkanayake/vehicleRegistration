var express = require("express");
const vehicleModel = require("../models/vehicle");
var router = express.Router();

//add details
router.post("/add-details", function (req, res, next) {
  const vehicle = new vehicleModel({
    vehicleId: req.body.vehicleId,
    vehicleVintage: req.body.vehicleVintage,
    vehicleOld: req.body.vehicleOld,
    vehicleModern: req.body.vehicleModern,
  });

  try {
    vehicle.save();
    res.status(200).json({
      succuss: true,
      message: "Insertion succussfull",
      payload: {},
    });
  } catch (error) {
    res.status(400).json({
      message: "Cannot add data right now!",
    });
  }
});

//autoincrement id
router.get("/vehicleId", function (req, res, next) {
  vehicleModel
    .find()
    .sort({ vehicleId: -1 })
    .limit(1)
    .then((id) => {
      res.status(200).json({
        success: true,
        message: "sucessful",
        payload: id[0].vehicleId + 1,
      });
    })
    .catch((e) => {
      res.status(400).json({ success: false, message: e.message, payload: {} });
    });
});

//read vehicle details
router.get("/details/read", async (req, res, next) => {
  try {
    let vehicleDetails = await vehicleModel
      .find()
      .then((response) => {
        res.status(200).json({
          succuss: true,
          message: "read succussfull",
          payload: response,
        });
      })
      .catch((error) => {
        res.status(400).json({
          succuss: true,
          message: error.message,
        });
      });
  } catch (error) {
    res.status(400).json({
      succuss: true,
      message: error.message,
    });
  }
});

//update vehicle details
router.put("/update-details", (req, res, next) => {
  vehicleModel
    .updateOne(
      { vehicleId: req.body.vehicle.vehicleId },
      {
        $set: {
          vehicleVintage: req.body.vehicle.vehicleVintage,
          vehicleOld: req.body.vehicle.vehicleOld,
          vehicleModern: req.body.vehicle.vehicleModern,
        },
      }
    )
    .then((result) => {
      res.json({
        success: true,
        message: "Update sucessful",
        payload: {},
      });
    })
    .catch((e) => {
      res.status(400).json({ success: false, message: e.message, payload: {} });
    });
});

//delete vehicle details
router.delete("/delete-details", (req, res, next) => {
  vehicleModel
    .deleteOne(
      { vehicleId: req.body.vehicle.vehicleId }
    )
    .then((result) => {
      res.json({
        success: true,
        message: "Deleted sucessful",
        payload: {},
      });
    })
    .catch((e) => {
      res.status(400).json({ success: false, message: e.message, payload: {} });
    });
});

module.exports = router;
