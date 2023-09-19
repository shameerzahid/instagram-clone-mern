const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId, //it stores the object id of users which are in mongoDB
    ref: "User",
  },
});

const Post = mongoose.model("Post", userSchema);

module.exports = Post;
