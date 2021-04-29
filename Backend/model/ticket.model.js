const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const TicketType = ["ticket", "adminRequest"];

const TicketSchema = mongoose.Schema({
	userId: { type: mongoose.Types.ObjectId, required: true },
	ticketType: { type: String, enum: TicketType, required: true },
	message: { type: String, required: true },
})

const TicketModel = mongoose.model("Ticket", TicketSchema);

module.exports = {
	TicketModel,
	TicketType,
};


