/*
    Implicit Type Conversion
 */

// Numeric string used with + gives string type
let numStr = "10";
let result = numStr + 5;
console.log(typeof result); // string
console.log(result); // string


// Implicit Conversion to Number
// -,+,/ is used to covert string values to numbers
let numStr1 = "10";
let result1 = numStr - 5;
let result2 = numStr / 2;
let result3 = numStr * 3;
console.log(typeof result1); // number
console.log(result1); // number

console.log(typeof result2); // number
console.log(result2); // number

console.log(typeof result3); // number
console.log(result3); // number


// If a boolean is used, true is 1, false is 0
let bool = true;
let result4 = bool + 5;
console.log(typeof result4); // number
console.log(result4); // 6


// null is zero when used with the number
let nullVal = null;
let result5 = nullVal + 5;
console.log(typeof result5); // number
console.log(result5); // 5


/*
    Explicit Type Conversion
*/

// Convert to Number Explicitly
let result6;
// string to number
result6 = Number('324');
console.log(result6); // 324

result6 = Number('324^(e-1)')
console.log(result6); // 32.4

// boolean to number
result6 = Number(true);
console.log(result6); // 1

result6 = Number(false);
console.log(result6); // 0



// Convert to String Explicitly
//number to string
let result7;
result7 = String(325);
console.log(result7);  // "325"

result7 = String(2 + 5);
console.log(result7); // "7"

//other data types to string
result7 = String(undefined);
console.log(result7); // "undefined"

result7 = String(null);
console.log(result7); // "null"

result7 = String(true);
console.log(result7); // "true"

result7 = String(NaN);
console.log(result7); // "NaN"

//using toString()
result7 = (324).toString();
console.log(result7); // "324"

result7 = true.toString();
console.log(result7); // "true"

result7 = String(false);
console.log(result7); // "false"


let result8;
result8 = Boolean('');
console.log(result8); // false

result8 = Boolean(0);
console.log(result8); // false

result8 = Boolean(undefined);
console.log(result8); // false

result8 = Boolean(null);
console.log(result8); // false

result8 = Boolean(NaN);
console.log(result8); // false

result8 = Boolean(324);
console.log(result8); // true

result8 = Boolean('hello');
console.log(result8); // true

result8 = Boolean(' ');
console.log(result8); // true