const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

//moongose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://root:root@localhost:27017/", {
  dbName: "usersdb",
});

//Schemas
require("./src/api/v1/models/users.model");

//Routes
const users = require("./src/api/v1/routes");
app.use("/users", users);

// //Middlewares
// const authMiddleware = require("./src/api/v1/middlewares/authMiddleware");
// app.use(authMiddleware);

module.exports = app;
