const express = require("express");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();
const Post = require("../Models/post");

router.post("/createpost", checkLogin, async (req, res) => {
  const { title, body, pic } = req.body;
  console.log(req.body);
  if (!title || !body || !pic) {
    return res.status(422).json({ error: "Please fill all fields" });
  }
  //   req.user.password = undefined;
  const post = new Post({
    title,
    body,
    photo: pic,
    postedBy: req.user,
  });
  const postCreated = await post.save();
  if (postCreated) {
    return res.status(200).json({ post: "Post Created Successfuly" });
  } else {
    res.status(422).json({ error: "Please fill all fields" });
  }
});

router.get("/allpost", (req, res) => {
  try {
    Post.find()
      .populate("postedBy", "_id name")
      .then((posts) => {
        //post.Find() finds all the posts in Post model
        res.status(200).json({ posts });
      });
  } catch (error) {
    consol.log(error);
  }
});

router.get("/mypost", checkLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((mypost) => {
      res.status(200).json({ mypost });
    });
});

module.exports = router;
