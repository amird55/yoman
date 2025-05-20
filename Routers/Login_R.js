const express = require('express');
const user_Mid = require("../middleware/user_Mid");
const router = express.Router();
module.exports = router;


router.get("/LoginForm", (req, res) => {
    res.render("login");
});

// התחברות בפועל
router.get("/Login", [user_Mid.CheckLogin], (req, res) => {
    res.send("התחברת בהצלחה!");
});