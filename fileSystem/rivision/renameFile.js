const fs = require("fs");

fs.rename("nextFile.txt", "renameFile", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File name changed");
  }
});
