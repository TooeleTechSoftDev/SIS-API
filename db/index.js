const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://<user>:<password>@cluster0-opiru.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(console.log("\x1b[35m", "This is connected to MongoDB"))
  .catch(e => {
    console.error("Connection error", e.message);
  });
const db = mongoose.connection;
module.exports = db;
