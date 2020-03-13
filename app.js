const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const cookieSession= require("cookie-session");
const key = require("./config/key")

const app = express();


app.set("view engine", "ejs");

//========== Middlewar ===========
//cookie
app.use(cookieSession({
    maxAge: 60*60*1000,
    keys: [key.cookie.cookiekey]
}))

//initialize passportt for se/deserialization
app.use(passport.initialize());

//session
app.use(passport.session());

//auth
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