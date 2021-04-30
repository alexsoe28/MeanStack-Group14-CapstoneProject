const { UserModel, UserRoles } = require("../model/users.model");

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
exports.userSignup = (req, res, next) => {
	let { username, password, role } = req.body;
	if (typeof username !== "string" || typeof password !== "string" || !UserRoles.includes(role)) {
		next(new TypeError(`Invalid Signup Credentials.`)); return;
	}

	UserModel.create({ username: username, password: password, roles: role })
		.then(doc => res.status(200).json((({ _id, username }) => ({ _id, username }))(doc)))
		.catch(next)
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.userLogin = async (req, res, next) => {
	let { username, password, accessingRole } = req.body;
	if (typeof username !== "string" || typeof password !== "string" || !UserRoles.includes(accessingRole)) {
		next(new TypeError(`Invalid request.`)); return;
	}

	const query = UserModel.findOne({ username: username, password: password, roles: accessingRole });

	try {
		const user = await query.then();
		if (user) {
			res.status(200).json({ userId: user.get("_id") });
		} else {
			res.status(403).json({});
		}
	}
	catch (error) {
		next(error);
	}
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.unlockUserById = async (req, res, next) => {
	let { userId } = req.body;
	if (typeof userId !== "string") {
		next(new TypeError(`Invalid userId`)); return;
	}

	try {
		const user = await UserModel.findById(userId);
		if (user === undefined) {
			res.send({ error: "User does not exist" }); return;
		} else {
			const doc = await user.updateOne({ status: "normal" }).exec();
			res.status(200).send(doc);
		}
	} catch (error) {
		next(error);
	}

};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.updateDetails = async (req, res, next) => {
	let { userId, fName, lName, email, username, password } = req.body;
	const invalidKeys = [fName, lName, email, username, password].findIndex(item => !(typeof item === "string" || item === undefined));
	console.log(invalidKeys);
	if (typeof userId !== "string" || invalidKeys !== -1) {
		next(new TypeError(`Invalid request.`)); return;
	}

	/** @type {[key: string]: string} */
	const payload = [
		[username, "username"],
		[password, "password"],
		[fName, "contact.firstName"],
		[lName, "contact.lastName"],
		[email, "contact.email"],
	].reduce((obj, [newValue, key]) => {
		if (newValue !== undefined) {
			obj[key] = newValue;
		}
		return obj;
	}, {})
	console.log(payload);

	try {
		const updated = await UserModel.findByIdAndUpdate(userId, payload, { new: true });
		const user = await UserModel.findById(userId, null);
		if (updated === null) {
			res.send({ error: "User does not exist" }); return;
		} else {

			// if (username !== undefined) { user.username = username };
			// if (password !== undefined) { user.password = password };
			// if (email !== undefined) { user.contact.email = email };
			// if (fName !== undefined) { user.contact.firstName = fName };
			// if (lName !== undefined) { user.contact.lastName = lName };

			res.status(200).json(updated);
		}
	} catch (error) {
		next(error);
	}

};