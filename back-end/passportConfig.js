const LocalStrategy = require("passport-local").Strategy;
const db = require("./db/dbConfig.js");
const bcrypt = require("bcrypt");

const initialize = (passport) => {
  const authenticateUser = (username, password, done) => {
    db.one("SELECT * FROM users WHERE username=$1", username)
      .then((user) => {
        if (user.id) {
          bcrypt.compare(password, user.password, (err, isCorrect) => {
            if (err) throw err;
            if (isCorrect)
              //useless message as i am not using ejs
              return done(null, user, { message: "Successfully logged in!" });
            else
              return done(null, false, { message: "Password is not correct" });
          });
        } else done(null, false, { message: "user didn't sign up" });
      })
      .catch(() => done(null, false, { message: "user didn't sign up" }));
  };
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      authenticateUser
    )
  );
  passport.serializeUser((user, done) => done(null, user.id)); //store id in the session
  passport.deserializeUser((id, done) =>
    db
      .one("SELECT * FROM users WHERE id=$1", id)
      .then((user) => {
        return done(null, user);
      })
      .catch((e) => console.log("catch", { catch: e }))
  );
};

module.exports = initialize;
