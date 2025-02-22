const express = require("express");

const app = express();

app.use(function (req, res, next) {
  console.log("Hey Hello");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Express!!");
});

app.get("/about", (req, res) => {
  res.send("Somthing about , About page.");
});

app.get("*", (req, res) => {
  res.send("Opps page not found here....");
});
const port = 3000;

app.listen(port, () => {
  console.log(`Your server is running on the port ${port}`);
});
