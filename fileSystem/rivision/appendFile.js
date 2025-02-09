const fs = require("fs");

fs.appendFile("nextFile.txt", "node js is runtime environment", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("data appended");
  }
});
