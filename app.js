const express = require("express");
const path = require("path");

const app = express();

app.set("view engine","ejs");

//========== Services ============
app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname,"views/Home.html"));
    res.render("home.ejs")
});

const PORT = 8080;
app.listen(PORT,()=>{
    console.log("Server is running at "+PORT)
});