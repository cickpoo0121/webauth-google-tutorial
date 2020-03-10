const express = require("express");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
// const path = require("path");

const app = express();


app.set("view engine", "ejs");

//========== Middlewar ===========
app.use("/auth", authRoutes);

//========== Services ============
//--- Root ---
app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname,"views/Home.html"));
    res.render("Home.ejs");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running at " + PORT)
});