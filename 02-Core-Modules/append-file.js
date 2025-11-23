const fs = require("fs");

try {
  fs.writeFileSync("./output/app.js", "const hello = 'hello word' \n");
  console.log("file created");

  const logEntry1 = `${new Date().toISOString()} user logged in \n`;
  fs.appendFileSync("./output/app.log", logEntry1);
  const logEntry2 = `${new Date().toISOString()} user logged 2 in \n`;
  fs.appendFileSync("./output/app.log", logEntry2);
} catch (error) {
  console.log(error.message);
}
