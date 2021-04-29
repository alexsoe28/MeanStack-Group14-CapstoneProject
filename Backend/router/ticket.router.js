const express = require("express");
const router = express.Router();
const TicketsController = require("../controller/ticket.controller");

// MARK: - Routing
router.get("/getAllUserTickets", TicketsController.getAllUserTickets);
router.get("/getAllAdminTickets", TicketsController.getAllAdminTickets);
router.post("/raiseUserTicket", TicketsController.raiseUserTicket);
router.post("/raiseAdminRequest", TicketsController.raiseAdminRequest);

// MARK: - Exports
module.exports = router;
