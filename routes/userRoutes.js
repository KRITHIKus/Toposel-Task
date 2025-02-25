const express = require("express");
const { searchUser } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/search", authMiddleware, searchUser);

module.exports = router;
