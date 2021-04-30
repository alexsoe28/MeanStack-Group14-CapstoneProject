const express = require("express");
const router = express.Router();
const InventoryController = require("../controller/inventory.controller");

// MARK: - Routing
router.get("/getAll", InventoryController.getAll);
router.get("/getById", InventoryController.getById);
router.post("/addOne", InventoryController.addOne);
router.put("/updateById", InventoryController.updateById);
router.delete("/deleteById", InventoryController.deleteById);

// MARK: - Exports
module.exports = router;