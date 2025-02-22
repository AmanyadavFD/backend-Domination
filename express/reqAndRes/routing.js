const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Somthing about main page.");
});

app.get("/about", (req, res) => {
  res.send("Somthing about, about page");
});

app.get("/profile/:userName", (req, res) => {
  res.send(req.params.userName + `'s page`);
});

app.get("/author/:username/:age", (req, res) => {
  res.send(
    `Somthing about the author page and author name is ${req.params.username} and author age is ${req.params.age}`
  );
});
app.listen(4050);
