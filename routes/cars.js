var express = require('express');
var router = express.Router();
const cars = require("../controller/carsController");
const auth = require("../middleware/auth");
const dupliadmin = require("../middleware/duplicateAdmin");

router.get("/cars",auth,cars.getCarsAvail);
router.post("/createCars",dupliadmin , cars.createCar);
router.put("/deleteCars/:id",dupliadmin , cars.deleteCar);
router.put("/updateCars/:id",dupliadmin , cars.updateCar);

module.exports = router;