const LocalStrategy = require("passport-local").Strategy;
const db = require("./db/dbConfig.js");
const bcrypt = require("bcrypt");

const initialize = (passport) => {
  const authenticateUser = (username, password, done) => {
    db.one("SELECT * FROM users WHERE username=$1", username)
      .then((user) => {
        console.log(user);
        if (user.id) {
          bcrypt.compare(password, user.passport, (err, isCorrect) => {
            if (err) throw err;
            if (isCorrect) return done(null, user);
            else
              return done(null, false, { message: "Password is not correct" });
          });
        } else done(null, false, "user didn't sign up");
      })
      .catch((e) => console.log({ catch: e }));
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
  passport.serialiazeUser((user, done) => done(null, user.id)); //store id in the session
  passport.deserializeUser((id, done) =>
    db
      .one("SELECT * FROM users WHERE id=$1", id)
      .then((user) => {
        return done(null, user);
      })
      .catch((e) => console.log({ catch: e }))
  );
};
