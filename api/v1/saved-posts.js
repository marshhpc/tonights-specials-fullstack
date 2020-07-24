// The saved posts resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const userPost = require("../../queries/userPost");

// @route           GET api/v1/saved-posts
// @desc            GET all posts for a user and order
// @access          public

router.get("/", (req, res) => {
   console.log(req.query);
   const { userId, order } = req.query;
   db.query(userPost, [userId, order])
      .then((dbRes) => {
         res.json(dbRes);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;
