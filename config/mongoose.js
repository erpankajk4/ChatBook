// required the library
const mongoose = require("mongoose");

//connection to the database
mongoose.connect(process.env.DB || "mongodb://127.0.0.1/Auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// acquire the connection (to check if it is successful or not)
const db = mongoose.connection;

// checking for the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", () => {
  console.log("successfully connected to database!!");
});

// exporting the connection
module.exports = db;
