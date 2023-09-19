const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const app = express();

require("./Models/user");
require("./Models/post");
const cors = require("cors");

// Enable CORS for your frontend origin (http://127.0.0.1:5173)
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5173" }));
const router1 = require("./routers/auth");
const router2 = require("./routers/post");
app.use(router1);
app.use(router2);

mongoose
  .connect(process.env.URI)
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log(err);
  });

//middleware executed before the route.
//if you want this middleware to get executed for all the routes it is written like this in app.use()
// const cutomMiddleware = (req, res, next) => {
//   console.log("Middle ware  here");
//   next();
// };

// app.use(cutomMiddleware);
// app.get("/", (req, res) => {
//   console.log("Home");
//   res.send("Hello WORLD");
// });

//if you want the middle ware to get executed only for one router it is written like this
// app.get("/about", cutomMiddleware, (req, res) => {
//   console.log("about");
//   res.send("Hello WORLD");
// });

app.listen(process.env.PORT, () => {
  console.log("Listening on ", process.env.PORT);
});
