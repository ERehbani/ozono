const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGOOSE_CONNECT)
  .then(() => console.log("MongoDB 🍃✅"))
  .catch((error) => console.log(error, "Conexión Fallida 🍃❌"));
