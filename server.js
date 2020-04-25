const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const cors = require("cors");

const server = require("http").createServer(app);
const moment = require("moment");
var io = require("socket.io")(server);
const mongoose = require("mongoose");
const routes = require("./routes/classRoutes.js");

var time = moment().format("h:mm a");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Creating express app and configuring middleware needed for authentication
/* MONGOOSE SETUP */
// Finally, we add passportLocalMongoose as a plugin to our Schema. This will work part of the magic we talked about earlier. Then, we create a model from that schema. The first parameter is the name of the collection in the database. The second one is the reference to our Schema, and the third one is the name we’re assigning to the collection inside Mongoose.
mongoose.connect("mongodb://localhost/kidtracker", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Send every request to the React app
app.use(routes);
// app.use(cors());
// Define any API routes before this runs
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// All socket.io/chat functionality follows...

io.on("connection", (socket) => {
	// Registers the connection

	// let username = "john";

	// const user = {
	// 	id: socket.id,
	// 	name: username
	// };

	// console.log(user.name, 'is connected as ID:', user.id);

	socket.on("disconnect", () => {
		// Registers the disconnect
		console.log(socket.id, " disconnected");
	});

	socket.on("chat message", (msg) => {
		// Accepts a message from sender on front end
		console.log(socket.id, "says", msg, "at", time);
		io.emit("chat message", msg, time); // Sends message back to all users front end
	});

	socket.on("set user name", (name) => {
		console.log(socket.id, " is working as ", name);
		io.emit("set user name", name);
	});
}); // END of socket.io/chat functionality

server.listen(PORT, function () {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
