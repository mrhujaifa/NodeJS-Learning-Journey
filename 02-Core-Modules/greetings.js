const args = process.args;

//process.arg[0] = node path
//process.arg[1] = file path
// process.arg[2] = first actural argument

const name = args[2] || "guest";
const time = new Date().getHours();
let greeting;

if (time > 12) {
  greeting = "Good Morning";
} else if (time < 18) {
  greeting = "Good Asternoon";
} else {
  greeting = "Good Evening";
}

console.log(`${greeting} ${name}`);
