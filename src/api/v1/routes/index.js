const express = require("express");
const router = express.Router();
const { createUser, getUsers, getUserByUsername, updateUserById, deleteUserById } = require("./users");
const { login, register } = require("./auth");
const validateSession = require("../middlewares/authMiddleware");

router.post("/", validateSession, createUser);
router.get("/", validateSession, getUsers);
router.get("/:username", validateSession, getUserByUsername);
router.patch("/:id", validateSession, updateUserById);
router.delete("/:id", validateSession, deleteUserById);
router.post("/login", login);
router.post("/register", register);

module.exports = router;
