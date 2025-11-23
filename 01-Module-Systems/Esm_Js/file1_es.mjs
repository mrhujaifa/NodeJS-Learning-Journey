// How to Import any thing in EMS JS
import { num } from "./file2_es.mjs"; // import from file 2 in es js
import { str } from "./file3_es.mjs"; // import from file 3 in es js
import { str as str1 } from "./file3_es.mjs"; // if need to change name so use 'as' keyword

import { add } from "./utils/index.mjs";

console.log(add(2, 3));
// console.log(num);
// console.log(str);
 