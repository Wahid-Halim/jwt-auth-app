const express = require("express");
const { register, signIn } = require("../controllers/auth.controllers");
const router = express.Router();

router.post("/sign-up", register);
router.post("/sign-in", signIn);

module.exports = router;
