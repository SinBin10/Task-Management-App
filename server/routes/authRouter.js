const {
  loginReponse,
  getLoginReponse,
} = require("../controllers/authController");
const express = require("express");
const router = express.Router();

router.post("/login", loginReponse);
router.get("/login", getLoginReponse);

module.exports = router;
