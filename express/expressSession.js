const express = require("express");
const expressSession = require("express-session");

const app = express();

app.use(
  expressSession({
    secret: "random stuff",
    resave: false,
    saveUninitialized: false,
  })
);
app.get("/", (req, res) => {
  res.send("Hello Node + Express");
});

app.get("/create", (req, res) => {
  req.session.polo = true;
  res.send("Done");
});

app.get("/check", (req, res) => {
  console.log(req.session.polo);
  res.send(`Session Value: ${req.session.polo}`);
});

const port = 4000;

app.listen(port, () => {
  console.log(`Your Server is running on the port ${port}`);
});
