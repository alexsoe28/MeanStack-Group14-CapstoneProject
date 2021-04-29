const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const InventorySchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	stockInventory: { type: Number, default: 1 },
});

const InventoryModel = mongoose.model("Inventory", InventorySchema);

module.exports = InventoryModel;