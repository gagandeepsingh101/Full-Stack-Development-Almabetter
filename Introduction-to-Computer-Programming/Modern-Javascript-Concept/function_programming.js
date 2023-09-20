// Pure Function in JS always prodq the same result given the same input and have no side effects 
function sum1(a, b) {
    return a + b;
}

console.log(sum1(5, 6));

// Non Pure Function in JS always produce different results for same input like variable outside of function in function logic

let a = 8;
function sum(b) {
    console.log(a + b);
}
sum(8);

// First Class Object in JavaScript  is nothing but sending a function as a variable as a arguments into the another function to perform certain actions

function createAdder(x) {
    return function (y) {
        return x + y;
    }
}

const add5 = createAdder(5);
const result = add5(3);
console.log(result);

// Higher Order Functions is type of method and function which takes function as a argument or returns a function as a result from the function

function multipleOfTwo(n) {
    return n.map((ele) => ele * 2);
}
console.log(multipleOfTwo([1, 2, 3, 4, 5]));

function add(x) {
    return function (y) {
        return x + y;
    };
}
console.log(add(8)(6));

// Function Compositions is method in which the output of one function is passed as input to another function and so on until the last function us executed to provide the desired outcome.

const square = x => x ** 2;
const mul3 = x => x * 3;
function result2(n) {
    return square(mul3(n));
}
console.log(result2(3));

// compose() function takes any number of function and invokes them all one after the other

const resultCompose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
console.log(resultCompose(square, mul3)(3));

// pipe() function is used reverse order of the functions invocation by using the pipe() function

const resultPipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
console.log(resultPipe(square, mul3)(3));