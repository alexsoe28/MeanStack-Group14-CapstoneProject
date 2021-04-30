const e = require("express");
const { OrderModel, OrderStatus } = require("../model/order.model");
const { UserModel } = require("../model/users.model");
const { updateInventory, getPriceById } = require("./inventory.controller");

/** 
 * @typedef { import("express").Request } Request 
 * @typedef { import("express").Response } Response
 * @typedef { import("express").NextFunction } NextFunction
 */

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.checkoutCart = (req, res, next) => {
	const { userId, cart } = req.body;
	if (typeof userId !== "string" || !Array.isArray(cart)) {
		next(new TypeError(`Invalid request`));
		return;
	}
	const order = cart.map(({ productId, quantity }) => {
		quantity = Number(quantity);
		if (typeof productId !== "string" || isNaN(quantity)) {
			next(new TypeError(`Invalid cart: id: ${productId}, quantity: ${quantity}`));
			return;
		}
		return { productId: productId, quantity: quantity };
	})

	OrderModel.create({ userId: userId, cart: order, orderStatus: "ordered" })
		.then(async doc => {
			await updateInventory(doc.cart);
			return doc;
		})
		.then(async doc => {

			const promises = doc.cart.map(({ productId, quantity }) => {
				return getPriceById(productId).then(({ price }) => price * quantity);
			});
			const amount = (await Promise.all(promises)).reduce((acc, subtotal) => acc + subtotal, 0);
			return await this.deductFunds(userId, amount);
		})
		.then(doc => res.status(200).json((({ _id, orderStatus }) => ({ _id, orderStatus }))(doc)))
		.catch(error => {
			if (error instanceof TypeError && error.message === "Insufficient Funds") {
				res.status(403).json({ error: error.message });
			} else {
				next(error);
			};
		})
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.updateStatus = (req, res, next) => {
	const { orderId, status } = req.body;
	if (typeof orderId !== "string" || !OrderStatus.includes(status)) {
		next(new TypeError(`Invalid Request. req: ${JSON.stringify(req.body)}`));
		return;
	}

	const query = OrderModel.findByIdAndUpdate(orderId, { orderStatus: status }, { new: true });
	query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next);
};

/**
 * @param {String} userId
 * @param {Number} amount 
 */
exports.deductFunds = (userId, amount) => {

	return UserModel.findById(userId).exec()
		.then(doc => {
			if (doc === null) { throw new TypeError(`Invalid User ID`); }
		})
		.then(() => {
			return UserModel.findOneAndUpdate({ _id: userId, wallet: { $gt: amount } }, { $inc: { wallet: -amount } }, { new: true }).exec()
		})
		.then(doc => {
			if (doc === null) { throw new TypeError(`Insufficient Funds`); }
			return (({ _id, wallet }) => ({ _id, wallet }))(doc);
		})
}