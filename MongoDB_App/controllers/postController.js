"use strict";
let Models = require("../models"); // matches index.js

const getPosts = (res) => {
  // finds all Post
  Models.Posts.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// ++ Test updating and deleting a Post using Postman
module.exports = {
  getPosts,
};
