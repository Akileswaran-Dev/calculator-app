const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  saveHistory,
  getHistory,
} = require("../controllers/authController");

router.post("/signup", signup);

router.post("/login", login);

router.post("/save-history", saveHistory);

router.get("/history/:userId", getHistory);

module.exports = router;