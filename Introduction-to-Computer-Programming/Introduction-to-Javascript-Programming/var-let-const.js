// Var is global scope variable and let is block scope variable . In case of var we can access its value anywhere
// in js program whereas let is variable value access in js function or block in which its declaration and 
// initialization is done 

// const is simple let but one property different from let is that it initialized its value with is declaration
// and further its value is never initialized again
var a=10;
let b=20;
const c=30;
console.log(a,b,c);
{
    var a=20;
    let b=40;
    const c=60;
    console.log(a,b,c);
}
console.log(a,b,c);
// c=120;
b=80;
console.log(a,b,c);