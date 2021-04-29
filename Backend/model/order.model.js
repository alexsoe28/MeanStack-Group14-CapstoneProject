const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const OrderStatus = ["ordered", "shipped", "outForDelivery", "delivered", "cancelled"];

const OrderItemSchema = mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId, alias: "productId" },
	quantity: { type: Number, default: 1 },
})

const OrderSchema = mongoose.Schema({
	userId: { type: mongoose.Types.ObjectId, required: true },
	cart: { type: [OrderItemSchema], required: true },
	status: { type: String, enum: OrderStatus, required: true, alias: "orderStatus" },
})

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = {
	OrderModel,
	OrderStatus,
};

