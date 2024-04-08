const passport = require("passport");
const express = require("express");
const { createHash, isValidPassword } = require("../utils/hashBcrypt");
const router = express();
const userModel = require("../models/user.model");
const UserController = require("../controllers/user.controller");
const userController = new UserController();

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    console.log(user);
    if (user) {
      if (isValidPassword(user, password)) {
        req.session.login = true;
        console.log(req.session.login);
        req.session.user = user;
        console.log(req.session.user);
        return res.send("logueado con exito");
      }
      res.status(400).send({ error: "Contraseña incorrecta ❌" });
    } else {
      res.status(400).send({ error: "El usuario no existe ❌" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Error en el login ❌" });
  }
});

router.get("/allUsers", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  const user = await req.body;
  try {
    const result = await userController.editUser(id, user);
    if(!result) return res.status(400).send({message: "No se pudo actualizar el usuario por ruta"})
    res.json({
      message: "Usuario actualizado exitosamente",
      result
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/failedregister", (req, res) => {
  res.status(400).send({ error: "Registro fallido" });
});

module.exports = router;
