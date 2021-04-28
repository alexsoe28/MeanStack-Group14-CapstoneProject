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
	if (typeof username !== "string" || typeof password !== "string") {
		next(TypeError(`Invalid Signup Credentials.`)); return;
	}
	if (!UserRoles.includes(role)) { role = "customer"; }

	UserModel.create({ username: username, password: password, roles: role })
		.then(doc => res.status(200).json((({ _id, username }) => ({ _id, username }))(doc)))
		.catch(next)
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.userLogin = (req, res, next) => {
	res.send("logged in")
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.unlockUserById = (req, res, next) => {
	res.send("unlocked")
};
