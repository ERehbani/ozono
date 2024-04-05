const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    index: true,
    unique: true,
    // i need to put a min of characters
    validate: {
      validator: function (v) {
        return v.length >= 5;
      },
      message: (props) => `${props.value} debe tener más de 9 caracteres!`, // Personaliza este mensaje de error
    },
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }

});

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel;