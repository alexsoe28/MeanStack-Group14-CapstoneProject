const express = require("express");
const router = express.Router();
const OrdersController = require("../controller/order.controller");

// MARK: - Routing
router.post("/checkout", OrdersController.checkoutCart);
router.post("/updateStatusById", OrdersController.updateStatus);
router.get("/getAll", OrdersController.getAll);

// MARK: - Exports
module.exports = router;