# Javascript Foundation
## 1. JavaScript Decision Statements

1. JavaScript provides conditional statements to perform different actions based on different conditions. These include if, if...else, if...else if...else, and switch statements.

2. The if statement is used to execute a block of code only if a specified condition is true.

3. The if...else statement is used to execute one block of code if a 4. specified condition is true, and another block of code if the condition is false.

4. The if...else if...else statement is used to execute one of many blocks 
of code, based on multiple conditions.

5. The switch statement is used to perform different actions based on different conditions. It's often used when you have many conditions to check.

6. The ternary operator is a shorthand way of writing an if...else statement. It's written as condition ? exprIfTrue : exprIfFalse.

7. In JavaScript, all values have an inherent Boolean value, generally known as either truthy or falsy. Most values are truthy unless they are defined as falsy. Falsy values in JavaScript are false, 0, '' (empty string), null, undefined, and NaN.

8. JavaScript has both strict comparison (===, !==) and type-converting comparison (==, !=). It's generally recommended to use strict comparison to avoid unexpected type coercion.

9. JavaScript includes logical operators (&&, ||, !) that can be used to combine or invert conditions.

10. Logical operators (&& and ||) use short-circuit evaluation, meaning they only evaluate what is necessary and then stop. This can be used to your advantage in your code.

## 2. JavaScript Loops & Control Statements
1. JavaScript Loops and Control Statements are fundamental building blocks of JavaScript programming that allow developers to control the flow of their code. 

2. Loops are used to repeat blocks of code, while control statements are used to make decisions and direct the flow of code execution based on conditions. 

3. The main types of loops in JavaScript are for loops and while loops, and the main types of control statements are if statements, switch statements, and ternary operators. 

4. The break statement in JavaScript is used to exit a loop prematurely before the loop's condition is met.

## 3. JavaScript Arrays and Strings
1. In JavaScript, you can create an array using the Array object or square brackets [].

2. Array elements are accessed using square brackets [] and the index element you would like to access.

3. JavaScript provides several built-in array methods, operations, and functions for working with arrays. Some commonly used methods include push, pop, shift, unshift, sort, reverse, splice, concat, slice, and indexOf.

4. Array operations include using the +operator to concatenate arrays and using the == and === operators to compare arrays.

5. In-built functions for arrays include Array.isArray(), Array.from(), Array.of(), Array.prototype.forEach(), Array.prototype.map(), Array.prototype.filter(), and Array.prototype.reduce().

6. A multi-dimensional array is an array that contains other arrays as its elements. You can create a multidimensional array by nesting arrays inside of each other. 

7. To access elements within a multidimensional array, you can use multiple square brackets representing a different dimension.

8. In JavaScript, arrays have several properties that provide information about their contents and behavior. Some of the most commonly used properties are length, constructor, prototype.

## 4. JavaScript Objects and JSON
1. JavaScript objects are fundamental data type in the language and allow you to represent complex data structures, including arrays, functions, and even other objects. 

2. Objects can be created using the object literal syntax {key1: value1, key2: value2, ...} or using the Object constructor. 

3. They provide a flexible and versatile way to organize and store data in JavaScript and are widely used for tasks such as storing collections of data, organizing code into modules, and more.

4. You can access properties of an object using either dot notation object.property or bracket notation object["property"].
5. Object methods are functions that are associated with an object and can be invoked using the dot notation or bracket notation.

6. They can access the object properties and other methods within the same object using the this keyword.

7. Sets in JavaScript are a collection of unique values. They are similar to arrays, but each value in a set must be unique.

8. Maps in JavaScript are collections of key-value pairs. Unlike sets, maps allow you to store values with a specific key and retrieve values by that key.

9. The JavaScript Object Notation (JSON) is a lightweight format utilized for the exchange of data that can be effortlessly comprehended and produced by both human beings and machines.

10. JSON objects could be converted to JavaScript objects using the JSON.parse() method, and JavaScript objects can be converted to JSON using the JSON.stringify() method.

## 5. Functions in JavaScript - Basics
1. Functions are defined using the function keyword, followed by the function name, optional parameters in parentheses, and a code block enclosed in curly brackets.

2. JavaScript functions can be called by preceding the function name with the parenthesized parameters.

3. Function declarations define a function with a name or identifier, similar to variable declarations.

4. Functions can be called multiple times and can accept inputs through parameters.

5. Default parameters allow for predetermined values when a function is called without an or undefined argument.

6. The return keyword sends data from a function call back to the calling code, allowing the output to be stored in a variable for further use.

## 6. Functions in JavaScript - Advanced
1. JavaScript is a high-level, interpreted, and dynamic programming language. It is widely used to create interactive and dynamic web pages and applications.

2. In JavaScript, a variable is a container that holds a value and can be referenced by a name. Variables declaration can be done using the var, let, or const keywords and can store different data types, such as numbers, strings, and objects.

3. Function execution in JavaScript refers to calling and running a function. When a function is executed, it executes the code inside it from top to bottom. 

4. The execution of a function can be triggered in several ways, such as by calling the function by its name, by invoking it as a method of an object, or by using the apply or call methods.

5. Function expressions are used to create functions as values and can be used as arguments or assigned to variables. 

6. Function declarations are used to create named functions and are hoisted to the top of their scope. 

7. Functions in JavaScript can also take parameters, which are values passed into the function and can return a value using the return statement.

## 7. Asynchronous coding in JavaScript
1. In JavaScript, only one task can be processed at a time since it's a single-threaded programming language. To handle multiple tasks, it uses an event loop mechanism that schedules and executes tasks one at a time in a sequential manner. 

2. Understanding the single-threaded nature of JavaScript is essential for writing efficient and scalable code that can run smoothly in this environment.

3. The JavaScript event loop is a mechanism that allows the single-threaded language to handle multiple tasks by scheduling and executing them one by one in a sequential manner. 

4. The event loop continuously checks the message queue for tasks waiting to be processed and executes them. It's crucial for handling asynchronous operations and enables efficient handling of multiple tasks in a single-threaded environment. Understanding the event loop is essential for writing efficient and performant JavaScript code.

5. setTimeout() is a JavaScript function that schedules a task to run after a specified amount of time has passed. The syntax is setTimeout(function, milliseconds), where the function is the code to be executed and milliseconds is the amount of time to wait before executing the code.

6.  setTimeout() is often used in web development for tasks such as updating page content, showing notifications, and more. It is non-blocking, meaning it runs in the background while the JavaScript engine executes other code.

7. setInterval() is a JavaScript function that allows you to run a function or code block repeatedly at a specified interval. The syntax is setInterval(function, milliseconds), where a function is a code to be executed repeatedly, and milliseconds is the time interval between each execution.

8. setInterval() is often used in web development for tasks such as updating page content, animating elements, and checking for new data. It is non-blocking, meaning it runs in the background while the JavaScript engine executes other code. The actual interval may vary slightly depending on performance and the amount of code being executed, so it's a good practice to use setTimeout() with a dynamically calculated interval.

9. clearInterval() is a JavaScript function that stops a repeating function scheduled with setInterval(). The syntax is clearInterval(intervalId), where intervalId is the value returned by setInterval(). It is important to clear intervals when they are no longer needed to prevent memory leaks and improve performance.

## 8. Basics of OOPS
1. OOP stands for Object Oriented Programming and is a programming paradigm that uses objects to represent real-world entities and organize code. In OOP, objects contain data and behavior and interact with each other through methods and properties. 

2. Key features of OOP include encapsulation, inheritance, and polymorphism, which allow for better organization, reuse, and code maintainability. OOP is widely used in many programming languages and is a fundamental concept in software development.

3. ES6 introduced classes in JavaScript, which are blueprints for creating objects (instances). Classes allow for encapsulating data and behavior into reusable components. To create a class, the class keyword is used, followed by the name of the class and a set of curly braces that define the class body. 

4. Classes provide a structured way of defining objects and can be used to create reusable components. The class body can contain constructor functions, methods, and properties. To instantiate a class, the newoperator is utilized, which is followed by the class name.

5. this, bind, apply, and call are concepts in JavaScript that are used to control the value of the this keyword. this refers to the current object, but its value can be affected by how a method is called. The bind, apply, and call methods can be used to ensure a specific value of this is used within a method. 

6. Bind creates a new function with a specific value of this, apply, and call immediately calls the function with the specified value of this, with apply  taking an array of arguments and call taking a list of arguments separated by commas. These methods help control this value and allow for reusing functions with a different context.

7. In JavaScript, an object's prototype can be accessed and modified using the prototype property of its constructor function. This allows objects to inherit properties and methods from other objects and achieve inheritance in the language. 

8. The class syntax in ECMAScript 2015 provides a more convenient syntax for creating objects with prototypes and inheritance. 

9. The extends keyword can be used to create a subclass that inherits properties and methods from its superclass. In JavaScript, prototypes and inheritance allow for effective code reuse and the creation of complex object-oriented systems.
