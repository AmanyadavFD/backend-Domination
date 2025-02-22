const express = require("express");
const expressSession = require("express-session");
const flash = require("connect-flash");

const app = express();

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "anything",
  })
);

app.use(flash());

app.get("/", (req, res) => {
  req.flash("error", "Invalid Crededntials");
  res.redirect("/error");
});

app.get("/error", (req, res) => {
  let message = req.flash("error");
  res.send(message);
});
const port = 3050;
app.listen(port, () => {
  console.log(`Your server is running on the port ${port}`);
});
