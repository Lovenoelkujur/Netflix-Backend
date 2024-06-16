const express = require("express");
const Register = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(Register);

module.exports = router;