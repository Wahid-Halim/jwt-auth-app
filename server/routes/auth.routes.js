const express = require("express");
const { register } = require("../controllers/auth.controllers");
const router = express.Router();

router.post("/sign-up", register);

module.exports = router;
