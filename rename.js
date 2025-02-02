const fs = require("fs");

fs.rename("abcd.text", "hey.txt", function (err) {
  if (err) console.log(err);
  else console.log("File renamed");
});
