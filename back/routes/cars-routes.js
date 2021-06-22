const express = require("express");

const router = express.Router();

const carsControllers = require("../controllers/cars-controllers");

router.get("/", carsControllers.getAllCars);

router.post("/", carsControllers.createCar);

router.post("/comment/:cid", carsControllers.postComment);

router.get("/comments/:cid", carsControllers.readComments);

module.exports = router;
