const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const InventorySchema = mongoose.Schema({
	name: String,
	price: Number,
	stockInventory: Number,
});

const InventoryModel = mongoose.model("Inventory", InventorySchema);

module.exports = InventoryModel;