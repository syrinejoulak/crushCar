const HttpError = require("../models/http-error");

const Car = require("../models/car");
const User = require("../models/user");

const mongoose = require("mongoose");

const getAllCars = async (req, res, next) => {
  let cars;
  try {
    cars = await Car.find();
  } catch (err) {
    const error = new HttpError("Could not find cars", 404);
    return next(error);
  }

  res.json(cars);
};

const createCar = async (req, res, next) => {
  const { name, image } = req.body;

  const createdCar = new Car({
    name,
    image,
  });

  try {
    await createdCar.save();
  } catch (err) {
    const error = new HttpError(
      "Creating new post failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(200).json({ car: createdCar.toObject({ getters: true }) });
};

const postComment = async (req, res, next) => {
  const { comment, postedBy, name } = req.body;

  const cid = req.params.cid;

  const createdComment = { comment, postedBy, name };

  let commentedCar;

  try {
    commentedCar = await Car.findById(cid);
  } catch (err) {
    const error = new HttpError(
      "Creating new comment failed, car id not found.",
      500
    );
    return next(error);
  }

  let user;

  try {
    user = await User.findById(postedBy);
  } catch (err) {
    const error = new HttpError(
      "Creating new comment failed, user id not found.",
      500
    );
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    commentedCar.comments.push(createdComment);
    await commentedCar.save();
    sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating new comment failed, please try again.",
      500
    );

    return next(error);
  }

  res.status(200).json({ createdComment });
};

const readComments = async (req, res, next) => {
  const cid = req.params.cid;

  let carComments;

  try {
    carComments = await Car.findById(cid);
  } catch (err) {
    const error = new HttpError("Could not find comments", 404);
    return next(error);
  }

  res.json(carComments.comments);
};

exports.getAllCars = getAllCars;
exports.createCar = createCar;
exports.postComment = postComment;
exports.readComments = readComments;
