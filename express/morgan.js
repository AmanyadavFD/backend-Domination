const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(morgan("tiny"));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello Morgan ji...");
});

app.listen(4090);
