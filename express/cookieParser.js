const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hey Cookie Parser........");
});

app.get("/check", (req, res) => {
  console.log(req.cookies.banned);
  res.send("checking........");
});

app.get("/banned", (req, res) => {
  res.cookie("banned", true);
  res.send("banned");
});

app.listen(9000);
