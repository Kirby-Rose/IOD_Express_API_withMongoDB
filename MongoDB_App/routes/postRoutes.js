let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all post
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});
module.exports = router;
