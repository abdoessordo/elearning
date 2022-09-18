const express = require("express");
const router = express.Router();

// Routes
router.post("/login", require("../controllers/auth/login"));

module.exports = router;
