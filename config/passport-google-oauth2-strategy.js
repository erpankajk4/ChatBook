const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto");
const User = require("../models/user");

// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
  clientID: "458073152259-qcf4s61fj6f1g4vc0fk8fgkkjaiqcjs1.apps.googleusercontent.com",// copied from https://console.cloud.google.com/apis/credentials?project=chatbook-8076485917
  clientSecret: "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",
  callbackURL: "http://localhost:8000/auth/google/callback",
},
  function (accessToken, refreshToken, profile, done) {
    // find a user
    User.findOne({ email: profile.emails[0].value }).exec(function (err, user) {
      if (err) {
        console.log("error in google strategy-passport", err);
        return;
      }
      // console.log(accessToken, refreshToken);
      // console.log(profile);
      if (user) {
        // if found, set this user as req.user
        return done(null, user);
      } else {
        // if not found, create the user and set it as req.user
        User.create(
          {
            name: profile.displayName,
            email: profile.emails[0].value,
            password: crypto.randomBytes(20).toString("hex"),
          },
          function (err, user) {
            if (err) {
              console.log("error in creating user google strategy-passport", err);
              return;
            }
            return done(null, user);
          }
        );
      }
    });
  }
)
);
module.exports = passport;
