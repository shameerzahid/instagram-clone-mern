const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../Models/user");
dotenv.config();
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(420).json({ error: "You must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    //checking whether the token is generated from this key
    if (err) {
      return res.status(420).json({ error: "You must be logged in" });
    }
    const { _id } = payload;
    User.findById(_id).then((userData) => {
      req.user = userData;
      next();
    });
  });
};
