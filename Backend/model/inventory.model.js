const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const InventorySchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true, min: 0 },
	stockInventory: { type: Number, default: 1, min: 0 },
});

const InventoryModel = mongoose.model("Inventory", InventorySchema);

module.exports = InventoryModel;