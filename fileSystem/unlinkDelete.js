const fs = require("fs");

fs.unlink("hey.txt", function (err) {
  if (err) console.log(err);
  else console.log("Your file delted.");
});
