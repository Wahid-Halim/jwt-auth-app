const express = require("express");
const { deleteUser, getAllUsers } = require("../controllers/users.controllers");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.delete("/:id", deleteUser);
router.get("/", authMiddleware, getAllUsers);

module.exports = router;
