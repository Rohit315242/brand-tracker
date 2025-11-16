
const express = require("express");
const router = express.Router();
const { getMentions, getStats } = require("../controllers/mentionController");

router.get("/", getMentions);
router.get("/stats", getStats);

module.exports = router;
