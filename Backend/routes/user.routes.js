const express = require('express');
const protectRoute = require('../middleware/protectRoute');
const { getUsersForSidebar } = require("../controllers/user.controller.js");
const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
module.exports = router;