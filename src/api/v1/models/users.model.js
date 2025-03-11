const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    length: {
      max: 40,
    },
  },
  lastname: {
    type: String,
    required: true,
    length: {
      max: 40,
    },
  },
  secondLastname: {
    type: String,
    required: true,
    length: {
      max: 40,
    },
  },
  cellphone: {
    type: String,
    required: true,
    length: {
      max: 10,
    },
  },
  email: {
    type: String,
    required: true,
    length: {
      max: 40,
    },
  },
  username: {
    type: String,
    required: true,
    length: {
      max: 30,
    },
  },
  password: {
    type: String,
    required: true,
    length: {
      max: 20,
    },
  },
});

module.exports = mongoose.model("users", userSchema);
