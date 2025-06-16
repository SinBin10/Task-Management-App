const { dashboardController } = require("../controllers/dashboardController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

router.get("/dashboard", authMiddleware, dashboardController);

module.exports = router;
