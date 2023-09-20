/*
    Operators
*/

// Assignment operators
let val = 99;
console.log(val += 5);//104

console.log(val -= 5);//99
console.log(val *= 5);//495
console.log(val /= 5);//99
console.log(val %= 5);//4
console.log(val **= 5 + "");//1024


// Arithmetic operators
let val1 = 4;
let val2 = 5;
console.log(val1 + val2);//104
console.log(val - val2);//99
console.log(val * val2);//495
console.log(val / val2);//99
console.log(val % val2);//4
console.log(val ** val2);//1024


// Increment/Decrement operators
let val3 = 4;
console.log(val3++);//4
console.log(val3);//5
console.log(++val3);//6
console.log(val3--);//6
console.log(val3);//5
console.log(--val3);//4


// Comparison Operators 
let val5 = 4;
let val6 = 5;
console.log(val5 == val6);
console.log(val5 > val6);
console.log(val5 < val6);
console.log(val5 >= val6);
console.log(val5 <= val6);
console.log(val5 === val6);
console.log(val5 != val6);
console.log(val5 !== val6);


// Logical Operators
console.log(true && true);
console.log(true || false);
console.log(!(true));


// Bitwise Operators
// 1=true, 0=false
//                ....4 2 1 
// binary value of 5= 1 0 1
//                ....4 2 1 
// binary value of 6= 1 1 0

// & binary operator
// BD= Binary Digits
// binary value of 6= 1 1 0
// binary value of 5= 1 0 1
// print value BD   = 1 0 0
console.log(5 & 6);

// | binary operator
// binary value of 6= 1 1 0
// binary value of 5= 1 0 1
// print value BD   = 1 1 1
console.log(5 | 6);

// << binary operator
//                             binary value of 5 = 1 0 1
//                                            16 8 4 2 1
// add 2 zeros in the left of binary digit  = 1  0 1 0 0
console.log(5<<2);

// >> binary operator
//                             binary value of 5 = 1 0 1
//                                                 4 2 1
// removes 2 digits in the left of binary digit  = 0 0 1 
console.log(5>>2);

// ~ binary operator
//                             binary value of 5 = 0 1 0 1
//                                                 8 4 2 1
// removes 2 digits in the left of binary digit  = 1 0 1 0 
//                                                -(8 -2) = -6
console.log(~5);

// >>> Zero-fill right shift binary operator
//                             binary value of 5 = 0 1 0 1
//                                                 8 4 2 1
// removes 2 digits in the left of binary digit  = 0 0 1 0 
console.log(5>>>1);

// String Operations

console.log("hello"+"world");

// Ternary Operations

let age=19;
//     condtion?: true:false; 
let res=age>=18?"You can drive car":"You can not drive car";
console.log(res);