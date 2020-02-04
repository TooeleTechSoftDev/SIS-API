const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var http = require("http").Server(app);

// Mongodb connection:
// Must add login and pw
const db = require("./db");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const jwt = require("./helpers/jwt");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//app.use(jwt())

//Event Feed
app.use("/events", require("./events/events.controller"));
//app.use('/staff', require('./staff/staff.controller'))
//app.use('/student', require('./student/student.controller'))

const port = 8088;
http.listen(port, () => {
  console.log("\x1b[33m%s\x1b[0m", "Listening on port ", port);
});
