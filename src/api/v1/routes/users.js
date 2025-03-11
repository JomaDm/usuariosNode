const mongoose = require("mongoose");
const user = mongoose.model("users");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { name, lastname, secondLastname, cellphone, email, username, password } = req.body;

  const userExists = await user.findOne({
    $or: [{ username }, { cellphone }],
  });
  if (userExists) {
    return res.status(400).json({ message: "El usuario ya existe" });
  }

  const newUser = new user({
    name,
    lastname,
    secondLastname,
    cellphone,
    email,
    username,
    password: await bcrypt.hash(password, 10),
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const user = await user.findOne({ username: req.params.username });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    await user.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(await user.findById(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserByUsername,
  updateUserById,
  deleteUserById,
};
