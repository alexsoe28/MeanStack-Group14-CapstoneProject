const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const UserRoles = ["admin", "customer", "employee"]
const AccountStatus = ["normal", "locked"];

const UserSchema = mongoose.Schema({
	roles: { type: String, enum: UserRoles, required: true },
	status: { type: String, enum: AccountStatus, alias: "accountStatus", default: "normal" },

	wallet: { type: Number, default: 1000, min: 0 },

	username: { type: String, required: true },
	password: { type: String, required: true },

	contact: {
		firstName: { type: String },
		lastName: { type: String },
		email: { type: String },
		dob: { type: Date },
	}

})

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
	UserModel,
	UserRoles,
	AccountStatus,
};
