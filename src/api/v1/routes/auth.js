const mongoose = require("mongoose");
const user = mongoose.model("users");
const bcrypt = require("bcrypt");
const secret = process.env.SECRET || "secret";
const jwt = require("jsonwebtoken");
const { createUser } = require("./users");

const login = async (req, res) => {
  try {
    const userDetail = await user.findOne({
      $or: [{ username: req.body.username }, { cellphone: req.body.cellphone }],
    });

    if (userDetail) {
      const passwordMatch = await bcrypt.compare(req.body.password, userDetail.password);
      if (passwordMatch) {
        const token = jwt.sign({ userId: user._id }, secret, {
          expiresIn: "1h",
        });
        res.status(200).json({ userDetail, token });
      } else {
        res.status(401).json({ message: "Ocurrio un error al iniciar sesion" });
      }
    } else {
      res.status(401).json({ message: "Ocurrio un error al iniciar sesion" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
  await createUser(req, res);
};

module.exports = {
  login,
  register,
};
