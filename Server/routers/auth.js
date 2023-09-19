const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const checkLogin = require("../middlewares/checkLogin");
dotenv.config();
router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/protected", checkLogin, (req, res) => {
  //we want to access this and this only when you are logged in and have a token
  res.send("Hello Peter");
});

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Fill all the fields" });
  }
  try {
    const Userexist = await User.findOne({ email });
    if (Userexist) {
      return res.status(422).json({ error: "User Already Exist" });
    }
    bcryptjs.hash(password, 12).then((hashedpassword) => {
      const user = new User({ name, email, password: hashedpassword });
      const adduser = user.save();
      if (adduser) {
        return res.status(200).json({ message: "User Registered" });
      } else {
        res.status(500).json({ error: "Failed reg" });
      }
    });
  } catch (error) {
    return res.status(422).json({ error: "Fill all the fields" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ message: "Fill all the fields" });
  }
  try {
    const userfound = await User.findOne({ email });
    if (userfound) {
      bcryptjs.compare(password, userfound.password).then((passwordmatch) => {
        if (passwordmatch) {
          const token = jwt.sign(
            { _id: userfound._id },
            process.env.SECRET_KEY
          );
          const { _id, name, email } = userfound;
          res.status(200).json({ token, user: { _id, name, email } });
        } else {
          return res
            .status(422)
            .json({ message: "Enter correct email and password" });
        }
      });
    } else {
      return res
        .status(422)
        .json({ message: "Enter correct email and password" });
    }
  } catch (error) {
    return res
      .status(422)
      .json({ message: "Enter correct email and password" });
  }
});

module.exports = router;
