const mongoose = require("mongoose");
let ArticleSchema = new mongoose.Schema({
  text: String,
  title: String,
  description: String,
  feature_img: String,
  claps: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Article", ArticleSchema);
