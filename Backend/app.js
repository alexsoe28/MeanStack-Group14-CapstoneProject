const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const mongoUrl = "mongodb://localhost:27017/meanstack";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB
mongoose.connect(mongoUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
})
mongoose.connection;

// MARK: - Endpoints

app.get("/", (req, res) => {
	console.log(req);
	res.send("Success.");
})

app.use("/inventory", require("./router/inventory.router"));
app.use("/users", require("./router/users.router"));

// Default Error Handling
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: err.stack });
})

/** @param {Number} port */
function run(port) {
	app.listen(port, '0.0.0.0', () => {
		console.log(`Grocer Backend running on port ${port}.`);
	})
}

run(9090);