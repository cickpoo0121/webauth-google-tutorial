const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render("Login.ejs");
});

router.get("/google", (req, res) => {
    
});

module.exports=router;