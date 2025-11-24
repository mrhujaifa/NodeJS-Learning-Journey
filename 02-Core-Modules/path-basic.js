const path = require("path"); // import

console.log("Current file Ingo : \n"); // just return example

console.log("fileName: ", __filename); // FileName path
console.log("Directory:", __dirname); // Directory path
console.log("\n" + "_".repeat(50) + "\n"); // return ______________________

const filePath = "/shafayat/document/nextLevel.pdf"; // analyses filepath example

console.log("analyzing Path : ", filePath, "\n");
console.log("Directory: ", path.dirname(filePath));

const pasred = path.parse(filePath);

console.log("Parse path object: ", pasred);

console.log("formated path:", path.format(pasred));
