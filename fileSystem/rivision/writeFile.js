const fs = require("fs");

fs.writeFile("nextFile.txt", "hello ji node.js", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("You created new File.");
  }
});
