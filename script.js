const fs = require("fs");
// console.log(fs);

// Write the file
fs.writeFile("abcd.text", "Hey hello", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Your File created.");
  }
});
