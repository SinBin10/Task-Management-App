const {
  loginReponse,
  signUpReponse,
} = require("../controllers/authController");
const express = require("express");
const router = express.Router();

router.post("/login", loginReponse);
router.post("/signup", signUpReponse);

module.exports = router;
