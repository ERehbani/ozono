const passport = require("passport");
const { createHash } = require("../utils/hashBcrypt");
const UserModel = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        usernameField: "email",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const {
            username,
            first_name,
            last_name,
            email,
            password,
            country,
            city,
          } = req.body;
          if (
            !username ||
            !first_name ||
            !last_name ||
            !email ||
            !password ||
            !country ||
            !city
          )
            return null, false, { message: "Faltan datos" };
          const newUser = {
            username,
            first_name,
            last_name,
            email,
            password: createHash(password),
            country,
            city,
          };
          let result = await UserModel.create(newUser);
          return done(null, result);
        } catch (error) {
          console.log(error);
          return done(error);
        }
      }
    )
  );
};

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    let user = await UserModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
module.exports = initializePassport;
