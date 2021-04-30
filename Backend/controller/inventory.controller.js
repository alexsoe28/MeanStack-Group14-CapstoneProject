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
	query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next)
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
exports.getById = (req, res, next) => {
	const productId = req.query.productId;
	if (productId === undefined) {
		next(new TypeError(`Invalid productId. params: ${JSON.stringify(req.params)}`));
		return;
	}

	const query = InventoryModel.findById(productId);
	query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next)
}

exports.getPriceById = (productId) => {
	return InventoryModel.findById(productId)
		.then(doc => (({ price }) => ({ price }))(doc) )
}

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
exports.addOne = (req, res, next) => {
	let { name, price, stockInventory } = req.body;
	[price, stockInventory] = [Number(price), Number(stockInventory)];

	if (typeof name !== "string" || isNaN(price) || isNaN(stockInventory)) {
		next(new TypeError(`Invalid request parameters, body: ${JSON.stringify(req.body)}`));
		return;
	}

	const product = InventoryModel.create({ name: name, price: price, stockInventory: stockInventory });
	product
		.then(doc => res.status(200).json(doc))
		.catch(next);
}

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
exports.updateById = (req, res, next) => {
	let { productId, name, price, stockInventory } = req.body;
	const invalidKeys = [name, price, stockInventory].findIndex(item => !(typeof item === "string" || item === undefined));
	console.log(invalidKeys);
	if (typeof productId !== "string" || invalidKeys !== -1) {
		next(new TypeError(`Invalid request.`)); return;
		next(new TypeError(`Invalid request. Req: ${JSON.stringify(req.body)}`));
	}

	/** @type {[key: string]: string} */
	const payload = [
		[name, "name"],
		[price, "price"],
		[stockInventory, "stockInventory"],
	].reduce((obj, [newValue, key]) => {
		if (newValue !== undefined) {
			obj[key] = newValue;
		}
		return obj;
	}, {})
	const update = InventoryModel.findByIdAndUpdate(productId, payload, { new: true });
	update.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next);
}

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
exports.deleteById = (req, res, next) => {
	const { productId } = req.query;
	if (productId === undefined) {
		next(new TypeError(`Invalid productId. params: ${JSON.stringify(req.params)}`));
		return;
	}

	const query = InventoryModel.findByIdAndDelete(productId);
	query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next)
}

/**
 * 
 * @param {{productId: String, quantity: Number}[]} cart 
 */
exports.updateInventory = async (cart) => {
	const queries = cart.map(async ({ productId, quantity }) => {
		return InventoryModel
			.findById(productId)
			.then(doc => {
				if (doc === null) { throw new TypeError(`Invalid Product ID`); }
				return Math.max(0, doc.stockInventory - quantity);
			})
			.then(stockInventory => {
				return InventoryModel
					.findByIdAndUpdate(productId, { stockInventory: stockInventory }, { new: true })
					.exec();
			})
			.then(doc => console.log(doc))
			.catch(console.error)
	})
	return Promise.all(queries);
}