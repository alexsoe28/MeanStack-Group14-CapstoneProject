const e = require("express");
const { OrderModel, OrderStatus } = require("../model/order.model");

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
		.then(doc => res.status(200).json((({ _id, orderStatus }) => ({ _id, orderStatus }))(doc)))
		.catch(next);
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

	const query = OrderModel.findByIdAndUpdate(orderId, { orderStatus: status }, {new: true});
	query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next);
};