const fs = require("fs");

fs.mkdir("nodeFolder", (err) => {
  if (err) console.log(err);
  else console.log("Folder created.");
});
