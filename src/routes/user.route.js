const passport = require("passport");
const UserController = require("../controllers/user.controller");
const userController = new UserController();
const express = require("express");
const { createHash } = require("../utils/hashBcrypt");
const router = express();

// REGISTRO DE USUARIOS
router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/failedregister" }),
  async (req, res) => {
    if (!req.user)
      return res.status(400).json({
        message: "No se pudo crear el usuario",
      });
    req.session.user = {
      id: req.user.id,
      username: req.user.username,
      last_name: req.user.last_name,
      password: createHash(req.user.password),
      email: req.user.email,
      country: req.user.country,
      city: req.user.city,
    };
    return res
      .status(200)
      .send(`Usuario ${req.user.username} creado con exito`);
  }
);

router.get("/failedregister", (req, res) => {
  res.send({ error: "Registro fallido" });
});

module.exports = router;
