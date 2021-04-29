const express = require("express");
const router = express.Router();
const OrdersController = require("../controller/order.controller");

// MARK: - Routing
router.post("/checkout", OrdersController.checkoutCart);

// MARK: - Exports
module.exports = router;