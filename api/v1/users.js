// The users resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectUser = require("../../queries/selectUser");
const { toJson, toSafeParse } = require("../../utils/helpers");

// @route           GET api/v1/users
// @desc            GET a valid user via email and password
// @access          public

router.get("/", (req, res) => {
   db.query(selectUser("marshall@gmail.com", "replace me"))
      .then((dbRes) => {
         const user = toSafeParse(toJson(dbRes));
         console.log(user);
         res.json(user);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;
