const e = require("express");
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
	let { role, status, username, password, contact: {firstname, lastname, dob} } = req.body;
	console.log(req.body)
	if (typeof username == "" || typeof password == "" || !UserRoles.includes(role)) {
		next(new TypeError(`Invalid Signup Credentials.`)); return;
	}

	UserModel.create({ username: username, password: password, roles: role, status: status, contact:{ firstname: firstname, lastname: lastname, dob: dob} })
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
