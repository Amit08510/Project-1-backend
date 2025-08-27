const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Routes
router.post("/register", userController.registerUser);
router.get("/", userController.getUsers);

module.exports = router;
