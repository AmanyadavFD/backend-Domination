const fs = require("fs");

fs.rm("dummy", { recursive: true }, (err) => {
  if (err) console.log(err);
  else console.log("Folder Deleted.");
});
