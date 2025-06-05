const {
  loginReponse,
  getLoginReponse,
  signupResponse,
  getSignupResponse,
} = require("../controllers/authController");
const express = require("express");
const router = express.Router();

router.post("/login", loginReponse);
router.get("/login", getLoginReponse);
router.post("/signup", signUpResponse);
router.get("/signup", getSignUpResponse);


module.exports = router;
