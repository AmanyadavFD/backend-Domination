const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Somthing about main page.");
  console.log(req.params);
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.query);
  console.log(req.ip);
  console.log(req.headers);
  console.log(req.url);
  console.log(req.method);
});

app.get("/about", (req, res) => {
  res.send("Somthing about , about page.");
});

app.listen(9010);
