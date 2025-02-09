const fs = require("fs");

fs.readdir("nodeFolder", { withFileTypes: true }, (err, file) => {
  if (err) {
    console.log(err);
  } else {
    console.log(file);
  }
});
