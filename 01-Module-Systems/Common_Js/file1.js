// How to Import any thing in common JS

const { num } = require("./file2.js"); //import from file 2
const { str } = require("./file3.js"); //import from file 3
const { str: strOne } = require("./file3.js"); // If need change the name like str: name
const { add } = require("./utils/add"); //import from utils => add.js
const { subs } = require("./utils/subs"); //import from utils => add.js
const { add, subs } = require("./utils"); // If i create index.js file no mention require full file address like ./utils/add ..

const result = add(9, 9); // function call and return 2 prameter
const result1 = subs("ok", 3); // function call and return 2 prameter

console.log(result1);
console.log(result);
console.log(num, str);
