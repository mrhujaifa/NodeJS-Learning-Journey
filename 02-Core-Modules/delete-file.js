const fs = require("fs");

//Sync opration with unlinkSync
fs.writeFileSync("./output/temp.txt", "This is a samp file");

if (fs.existsSync("./output/temp.txt")) {
  console.log("file exits");

  fs.unlinkSync("./output/temp.txt");

  console.log("File Deleted");
}

try {
  fs.unlinkSync("./output/temp.txt");
} catch (error) {
  console.log(error.message);
}

// Async opration with unlink
const dataToWrite = "This is temporary content.";
fs.writeFile("./output/temp.txt", dataToWrite, (error) => {
  if (error) return console.error(error.message);

  fs.unlink("./output/temp.txt", (error) => {
    if (error) {
      console.error(error.message);
    } else {
      console.log("file deleted successfull");
    }
  });
});
