const UserModel = require("../models/user.model");

class UserController {
  async registerUser(req, res) {
    try {
      return res
        .status(200)
        .json({ message: `Usuario registrado ${username}` });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json(error, {
          message: "Error al registrar usuario en el user.controller.js",
        });
    }
  }
}

module.exports = UserController;
