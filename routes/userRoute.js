const express = require("express");
const { Register, Login, Logout } = require("../controllers/userController");

const router = express.Router();

// Register
router.post("/register", Register);

// Login
router.post("/login", Login);


// Logout
router.get("/logout", Logout);

module.exports = router;