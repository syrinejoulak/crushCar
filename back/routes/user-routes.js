const express = require("express");

const router = express.Router();

const { check } = require("express-validator");

const usersControllers = require("../controllers/user-controllers");

const checkAuth = require("../middleware/check-auth");

router.post(
  "/signup",
  [
    check("name").isLength({ min: 2, max: 10 }),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6, max: 20 }),
  ],
  usersControllers.signUp
);

router.post("/login", usersControllers.login);

router.get("/:uid", usersControllers.getUserById);

module.exports = router;
