const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "secret";

const validateSession = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "No autorizado" });
    }
    const decoded = jwt.verify(token.replace("Bearer ", ""), secret);

    if (!decoded) {
      return res.status(401).json({ message: "No autorizado" });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = validateSession;
