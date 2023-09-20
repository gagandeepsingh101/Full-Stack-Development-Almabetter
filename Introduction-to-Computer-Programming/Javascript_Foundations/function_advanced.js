// Function Declaration
function add(a, b) {
    return a + b;
}

console.log(add(4, 5));

// Function Expression
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(4, 5));

// Anonymous Function Expression
const result = function (a, b) {
    return a + b;
}
console.log(result(4, 25));

// Arrow Function Expression
const div = (a, b) => a / b;
console.log(div(4, 25));

// Zero Parameters
// const functionName = () => {};

// One Parameters
// const functionName = paramOne => {};

// Two or more Parameters
// const functionName = (paramOne, paramTwo) => {};

// Single-line block
// const sum = number => number + number;

// Multi-line block
// const sum = number => {
// 	const sum = number + number;
// 	return sum;
// }

// Immediately Invoke Function Expression(IIFE)
(function () {
    console.log("Hello JavaScript");
})()

// recursive function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

// Generator function : it generates the item when called it every q
function* numGenerator(n = 10) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

// In simple words, a generator function in JavaScript is a special type of function that allows you to pause its execution and resume it later. When you call a generator function, it doesn't run the entire code block at once; instead, it returns an iterator called a generator object.
const gen = numGenerator(10);
console.log("Generating Element :"+gen.next().value+"\n");
console.log("Generating Element :"+gen.next().value+"\n");
console.log("Generating Element :"+gen.next().value+"\n");
console.log("Generating Element :"+gen.next().value+"\n");
for (const element of gen) {
    console.log("Generating Element :"+element+"\n");
}