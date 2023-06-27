// loads environment variables from a .env file into process.env
require('dotenv').config(".env");

// Require necessary dependencies
const express = require("express"); // Express.js framework
const bodyParser = require("body-parser"); // Middleware to parse request bodies
const cookieParser = require("cookie-parser"); // Middleware to parse cookies
const expressLayouts = require('express-ejs-layouts'); //  module for layout support
const app = express(); // Create an instance of Express application
const port = process.env.PORT || 8000; // Define the port number for the server

// Require and configure the database connection
const db = require("./config/mongoose");

// Require and configure session management
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport"); // Authentication middleware
const passportLocal = require("./config/passport"); // Local authentication strategy
const passportGoogle = require("./config/passport-google-oauth2-strategy"); // Google OAuth2 authentication strategy

// Require and configure cross-origin resource sharing (CORS)
// const cors = require("cors");
// app.use(cors({ origin: "*" }));

// Configure body-parser middleware to handle URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Configure cookie-parser middleware
app.use(cookieParser());

// built-in middleware function in Express that serves static files such as images, CSS, and JavaScript files.
app.use(express.static("./assets"));

// configure the express-ejs-layouts module for layout support
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set the view engine and views directory for rendering templates
app.set("view engine", "ejs");
app.set("views", "./views");

// Configure express-session middleware
app.use(
  session({
    name: "Authentication", // Name of the session cookie
    secret: process.env.SESSION_SECRET_KEY || "secretKeyName", // Secret key used to sign the session ID cookie
    saveUninitialized: false, // Don't save uninitialized sessions
    resave: false, // Don't save session if not modified
    cookie: {
      maxAge: 1000 * 60 * 100, // Maximum age of the session cookie (in milliseconds)
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1/Auth", // MongoDB connection URL
      autoRemove: "disabled", // Disable automatic removal of expired sessions
    }),
    function(err) { // callback error function
      console.log(err || "connect-mongodb setup ok"); // Log any error during session setup
    },
  })
);

// Initialize and configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware to set the authenticated user in locals for views
app.use(passport.setAuthenticatedUser);

// Flash message middleware for displaying flash messages
const flash = require("connect-flash");
app.use(flash());

// Custom middleware to set flash messages in locals for views
const flashMiddleware = require("./config/middleware");
app.use(flashMiddleware.setFlash);

// Include routes
app.use(require("./routes"));

// Start the server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
