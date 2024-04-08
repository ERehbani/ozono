const UserModel = require("../models/user.model");

class UserController {
  async registerUser(req, res) {
    try {
      console.log(req);
      return res
        .status(200)
        .json({ message: `Usuario registrado ${username}` });
    } catch (error) {
      console.log(error);
      res.status(500).json(error, {
        message: "Error al registrar usuario en el user.controller.js",
      });
    }
  }
  async getAllUsers(req, res) {
    try {
      const result = await UserModel.find();
      return res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .send({ message: "No fue posible traer todos los usuarios" });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const result = await UserModel.findById(id);
      return res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .send({ message: "Error al traer el usuario por id" });
    }
  }

  async editUser(id, newUser) {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(id, newUser);
      if (!updatedUser) {
        return null;
      }
      return updatedUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = UserController;
