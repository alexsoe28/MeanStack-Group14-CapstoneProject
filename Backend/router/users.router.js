const express = require("express");
const router = express.Router();
const UsersController = require("../controller/users.controller");

// MARK: - Routing
router.post("/register", UsersController.userSignup);
router.post("/login", UsersController.userLogin);
router.post("/unlockUserById", UsersController.unlockUserById);

// MARK: - Exports
module.exports = router;