// ECMAScript is standard which tells JavaScript how to behave

// ES5  also know as ECMAScript 2009

// Top 5 ES5 Features

// 1. "use strict" : In  JavaScript, 'use strict'; states that the code should be executed in 'strict mode'
function split_str(str) {
    "use strict";
    let x = str.split("");
    console.log(x);
}
split_str("hello")


//2. Multiline String :In ECMAScript 5 (ES5), you can use the backslash (\) to create multiline strings by escaping the line breaks.

const multilineString = "This is a multiline string \
using the backslash to escape line breaks\
in JavaScript ES5.";
console.log(multilineString);

// 3. trim : it is used to remove extra whitespace from beginning and end of string
let str = "    hello   ";
console.log(str.length, " ", str.trim().length);


//4. JSON.stringify (convert JS Object into JSON String)and JSON.parse()(convert JS String into JSON Object)

const jsobj = { name: "John", age: 30, isStudent: true };
console.log(JSON.stringify(jsobj));
console.log(JSON.parse(JSON.stringify(jsobj)));

//5. Getter and Setter
const person =
{
    name: "John",
    age: 30,

    // Setter : It is used to set the value of the property when the property is modified.
    set setName(name) {
        this.name = name;
    },
    set setAge(age) {
        this.age = age;
    },

    // Getter : It is used to retrieve the value of the property when the property is accessed.

    get res() {
        console.log(`Name : ${this.name} \n Age:  ${this.age}`);
    }
};
person.setName = "Robert";
person.setAge = 34;
person.res;



//  ES6  also know as ECMAScript 2015
// Top 6 ES6 Features

// 1. Arrow functions : Arrow functions are a concise and expressive way to define functions in JavaScript.
const sum = (a, b) => a + b;
console.log(sum(3, 4));

// 2. Spread Operators : It uses the ellipsis (...) notation to spread the elements of an iterable (like an array or an object) into individual elements. The spread operator is particularly useful for copying, merging, and extracting values from arrays and objects.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Merge two arrays
console.log([...arr1, ...arr2]);

// create shallow copy
const originalArr = [10, 20, 30, 40, 50, 60];
const copyArr = [...originalArr];
console.log(copyArr);

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

// Merge objects
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);

// 3. Template Literals
// Template literals, also known as template strings, are a feature introduced in ECMAScript 6 (ES6) that allows you to create strings with embedded expressions. They provide a more concise and expressive way to define strings in JavaScript, especially when you need to include variables, expressions, or multiline content.

const variable = "value";
const templateLiteral = `This is a template literal with ${variable}.`;
console.log(templateLiteral);


// 4. let and const
let x = 10;
x = 20;

if (true) {
    let y = 5;
    console.log(y);
}

console.log(x);
// console.log(y); Throw error

// 5. Destructuring Assignment


// Array Destructuring:
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, ...restNumbers] = numbers;

console.log(first);
console.log(second);
console.log(restNumbers);

// Object Destructing 
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    country: "USA"
};

// Destructuring assignment : Destructuring assignment is a feature introduced in ECMAScript 6 (ES6) that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and convenient way. It provides an easy and readable method to unpack values from data structures like arrays and objects.

const { firstName, lastName, ...restPerson } = person1;

console.log(firstName);
console.log(lastName);
console.log(restPerson);



// Destructuring with default value and renaming

const person3 = {
    firstName: "John",
    lastName: "Doe"
};

const { firstName1="Robert", lastName1="Neldson", age = 25, country: homeCountry = "USA" } = person3;

console.log(firstName1);
console.log(lastName1);
console.log(age);
console.log(homeCountry);
