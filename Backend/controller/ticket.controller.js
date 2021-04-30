const e = require("express");
const { TicketModel, TicketType } = require("../model/ticket.model");

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
const raiseTicket = (ticketType, req, res, next) => {
	let { userId, message } = req.body;
	if (typeof userId !== "string" || typeof message !== "string") {
		next(new TypeError(`Invalid Credentials.`)); return;
	}

	TicketModel.create({ userId: userId, message: message, ticketType: ticketType })
		.then(doc => res.status(200).json((({ _id  }) => ({ _id }))(doc)))
		.catch(next)
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.raiseUserTicket = (req, res, next) => {
	return raiseTicket("ticket", req, res, next);
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.raiseAdminRequest = (req, res, next) => {
	return raiseTicket("adminRequest", req, res, next);
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
const getAllTicketsByType = (ticketType, req, res, next) => {
	const query = TicketModel.find({ticketType: ticketType});
	query.exec()
		.then(doc => res.status(200).json(doc))
		.catch(next);
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.getAllUserTickets = (req, res, next) => {
	return getAllTicketsByType("ticket", req, res, next);
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
exports.getAllAdminTickets = (req, res, next) => {
	return getAllTicketsByType("adminRequest", req, res, next);
};