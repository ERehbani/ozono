const http = require("http");
const express = require("express");
const userRouter = require("./routes/user.route");
const passport = require("passport");
const initializePassport = require("./config/passport.config");
const session = require("express-session");
const MongoStore = require("connect-mongo")
require("../database");
require("dotenv").config();

const app = express();
app.use(
  session({
    secret: "secretCoder",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGOOSE_CONNECT,
      ttl: 100,
    }),
  })
);
const httpServer = http.createServer(app);
initializePassport();
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

httpServer.listen(3001, () => {
  console.log("3001 🌐");
});
