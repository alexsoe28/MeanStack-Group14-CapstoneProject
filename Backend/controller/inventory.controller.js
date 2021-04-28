let InventoryModel = require("../model/inventory.model");

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
exports.getAll = async (req, res, next) => {
	const query = InventoryModel.find({});
	await query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next)
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
exports.getById = async (req, res, next) => {
	const productId = req.query.productId;
	if (productId === undefined) { next(TypeError(`Invalid productId. params: ${JSON.stringify(req.params)}`)); return; }

	const query = InventoryModel.find({ _id: productId });
	await query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next)
}

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
exports.addOne = async (req, res, next) => {
	let { name, price, stockInventory } = req.body;
	[price, stockInventory] = [Number(price), Number(stockInventory)];

	if (typeof name !== "string" || isNaN(price) || isNaN(stockInventory)) {
		next(TypeError(`Invalid request parameters, body: ${JSON.stringify(req.body)}`));
		return;
	}

	const product = new InventoryModel({ name: name, price: price, stockInventory: stockInventory })
	product.save()
		.then(doc => res.status(200).json(doc))
		.catch(next);
}

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
exports.updateById = async (req, res, next) => {
	let { productId, name, price, stockInventory } = req.body;
	[price, stockInventory] = [Number(price), Number(stockInventory)];
	if (typeof productId !== "string" || typeof name !== "string" || isNaN(price) || isNaN(stockInventory)) {
		next(TypeError(`Invalid request. Req: ${JSON.stringify(req.body)}`));
		return;
	}

	const update = InventoryModel.findByIdAndUpdate(
		productId,
		{ name: name, price: price, stockInventory: stockInventory },
		{ new: true }
	);
	update.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next);
}

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
exports.deleteById = async (req, res, next) => {
	const productId = req.params.productId;
	if (productId === undefined) { next(TypeError(`Invalid productId`)); return; }

	const query = InventoryModel.deleteOne({ _id: productId });
	await query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next)
}