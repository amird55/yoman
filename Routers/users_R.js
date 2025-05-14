const express = require('express');
const router = express.Router();
module.exports = router;

const user_Mid = require("../middleware/user_Mid");

router.get("/Add",(req,res)=>{
    res.render("crs_add",{
        data:{},
    });
});
router.post("/Add", [user_Mid.AddUser], (req, res) => {
    res.redirect("/Crs/List");
});
router.get("/Edit/:id",[user_Mid.GetOneUser],(req,res)=>{
    if(req.GoodOne) {
        res.render("crs_add", {
            data: req.one_course_data,
        });
    } else{
        res.redirect("/Crs/List");
    }
});
router.post("/Edit/:id", [user_Mid.UpdateUser], (req, res) => {
    res.redirect("/Crs/List");
});
router.get("/List",[user_Mid.GetAllUsers],(req,res)=>{
    res.render("crs_list",{
        page_title : "רשימת הקורסים",
        courses : req.courses_data,
    });
});
router.post("/Delete",[user_Mid.DeleteUser],(req,res)=>{
    res.redirect("/Crs/List");
})