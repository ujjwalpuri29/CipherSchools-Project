const express = require("express");

const login = require("../controllers.js/login");
const register = require("../controllers.js/register");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
