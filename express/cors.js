const express = require("express");
const app = express();

const cors = require("cors");

// app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello CORS in the Express!!!");
});

app.get("/share", cors(), (req, res) => {
  res.send("Now You get access the CORS Access on this shared route!");
});
app.listen(5690);
