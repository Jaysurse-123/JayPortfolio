const express = require("express");

const {
  createContactMessage,
} = require("../Controllers/ContactController");

const router = express.Router();

// Test whether contact route is reached
router.post("/", (req, res, next) => {
  console.log("CONTACT ROUTE HIT");

  createContactMessage(req, res, next);
});

module.exports = router;