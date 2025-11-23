const fs = require("fs");

console.log("Start reading...");

fs.readFile("./data/diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error.message);
  }
  console.log(data);
});
