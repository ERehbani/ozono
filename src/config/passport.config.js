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
            return (null, false, { message: "Faltan datos" });
          if (username.length < 5)
            return (null, false, {
              message:
                "El nombre de usuario debe contener al menos 5 caracteres",
            });
          if (first_name.length < 4)
            return (null, false, {
              message: "El nombre debe contener al menos 4 caracteres",
            });
          if (last_name.length < 4)
            return (null, false, {
              message: "El apellido debe contener al menos 4 caracteres",
            });
          if (email.length < 10)
            return (null, false, {
              message: "El mail debe contener al menos 10 caracteres",
            });
          if (password.length < 8)
            return (null, false, {
              message: "La contraseña debe contener al menos 8 caracteres",
            });
          if (country.length < 4)
            return (null, false, { message: "El país debe contener al menos 4 caracteres" });
          if (city.length < 4)
            return (null, false, {
              message: "La ciudad debe contener al menos 4 caracteres",
            });

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
