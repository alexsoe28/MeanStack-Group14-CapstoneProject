const express = require("express");
const router = express.Router();
const UsersController = require("../controller/users.controller");

// MARK: - Routing
router.post("/register", UsersController.userSignup);
router.post("/login", UsersController.userLogin);
router.post("/lockUser", UsersController.lockUserByUname);
router.post("/unlockUserById", UsersController.unlockUserById);
router.put("/updateUserDetails", UsersController.updateDetails);
router.post("/getUserById", UsersController.updateDetails);

// MARK: - Exports
module.exports = router;