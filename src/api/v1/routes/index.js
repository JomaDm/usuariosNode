const express = require("express");
const usersRouter = express.Router();
const authRouter = express.Router();
const { createUser, getUsers, getUserByUsername, updateUserById, deleteUserById } = require("./users");
const { login, register } = require("./auth");
const validateSession = require("../middlewares/authMiddleware");

usersRouter.post("/", validateSession, createUser);
usersRouter.get("/", validateSession, getUsers);
usersRouter.get("/:username", validateSession, getUserByUsername);
usersRouter.patch("/:id", validateSession, updateUserById);
usersRouter.delete("/:id", validateSession, deleteUserById);

authRouter.post("/login", login);
authRouter.post("/register", register);

module.exports = { usersRouter, authRouter };
