const express = require('express');
const router = express.Router();
module.exports = router;

const course_Mid = require("../middleware/course_Mid");

router.get("/Add",(req,res)=>{
    res.render("crs_add",{});
});
router.post("/Add", [course_Mid.AddCourse], (req, res) => {
res.send("ok");
});