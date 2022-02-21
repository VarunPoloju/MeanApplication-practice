const express = require("express");
const router = express.Router();
const Post = require("../../models/post");

// =========================GET===================================
router.get("", (req, res, next) => {
  Post.find().then((documents) =>
    res.status(201).json({
      message: "Post fetched successfully.",
      posts: documents,
    })
  );
});

// =========================GET BY ID===================================
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(400).json({
        message: "Post not found",
      });
    }
  });
});
// ==========================POST==============================
router.post("", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save();
  res.status(201).json({
    message: "Post added successfully.",
  });
});

// ==========================PUT==============================

router.put("/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Update successful!" });
  });
});

// ===============================delete============================

router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Post deleted successfully!" });
  });
});

module.exports = router;