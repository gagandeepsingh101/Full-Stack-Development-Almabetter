# Interview Prep

#### 1. How does a dynamic array differ from a basic array?

Dynamic arrays are arrays that can change their size during runtime. Unlike basic arrays, which have a fixed size determined at declaration, dynamic arrays automatically adjust their size based on the number of elements being stored. This means that you can add or remove elements from a dynamic array as needed without having to worry about manually resizing the array.

In contrast, basic arrays have a fixed size and do not dynamically adjust their size during runtime. This can lead to issues if a basic array's size is insufficient to store all of the elements and can result in data being overwritten or lost. Basic arrays are typically stored in a contiguous memory block, with the elements stored directly in the array.
 
##### 2. Can you explain how the Set data structure in JavaScript differs from arrays and give some examples of when you might use a Set instead of an array?  

A Set is a data structure in JavaScript that allows you to store unique values of any type. It is similar to an Array in that it can store multiple values, but there are a few key differences:
Unique Values: Unlike Arrays, Sets only allow unique values. If you try to add a value that already exists in a Set, it will simply be ignored.

* **Order :** Sets do not maintain the order of their elements. If you need to keep track of the order of elements, an Array is a better choice.

* **Operations:** Sets have a number of built-in operations, such as union, intersection, and difference, which make them useful for certain types of mathematical set operations.

Some examples of when you might use a Set 
instead of an Array include:

* **Removing duplicates:** If you need to remove duplicates from a collection of values, you can add the values to a Set, which will automatically only keep the unique values.
Checking for value existence: If you need to check if a value exists in a collection, a Set is a more efficient option as it provides a has method that can be used for this purpose.

* **Mathematical set operations:** If you need to perform mathematical set operations such as union, intersection, or difference, Sets provide a more convenient and efficient way to do this.
 
#### 3. Describe some ways to loop through an array in JavaScript.

In JavaScript, there are several ways to loop through an array:
* **for loop:** This is the most common way to loop through an array is to use a traditional for loop, which allows you to iterate over the array indices and access the elements.

* **forEach method:** JavaScript arrays have a forEachmethod that allows you to iterate over each element in the array without having to worry about the indices.

* **for...of loop:** This is a more recent way of looping through arrays that were introduced in ECMAScript 6. The for...ofloop allows you to iterate over the elements in an array, without having to access the indices.

* **for...in loop:** This is used to iterate over the properties of an object, including the properties of arrays. However, it's generally not recommended for use with arrays, as it will also return the properties that are inherited from the prototype. If you need to loop through an array, it's better to use one of the other methods.
 
#### 4. Can you explain the difference between shallow and deep copying in JavaScript and give an example of each? 
Shallow copying and deep copying are two methods of copying objects in JavaScript. The difference between them is in how they handle nested objects.

Shallow copying is a method of copying objects where only the top-level properties are copied, but any nested objects are referenced, not copied. In other words, if you make a change to a nested object in the copied object, it will also affect the original object, because they both reference the same nested object.

Deep copying, on the other hand, is a method of copying objects where all properties, including nested objects, are copied to a new object. In this way, the original object and the copied object are completely separate, and changes made to one will not affect the other.
 
#### 6. What is a return statement in a function, and why is it important?
A return statement in a function specifies the value that should be returned by the function when it's called. It is important because it allows a function to produce a value that can be used in the calling code. Without a return statement, a function will execute its code but not produce any output that can be used outside the function.
 
#### 7. What is RegEx in JavaScript? Give some use cases for RegEx.
RegEx, short for Regular Expression, is a powerful and versatile pattern-matching and manipulation tool used in computer science and programming. It is a sequence of characters that defines a search pattern. Regular expressions are primarily used for string manipulation, text search, and validation tasks. They allow you to specify complex search patterns in a concise and flexible way.
Regular expressions are supported in many programming languages, including JavaScript, Python, Java, Ruby, and more.

Here are some common use cases for regular expressions:

* **Validation:** You can use regular expressions to validate input, such as email addresses, phone numbers, or credit card numbers.
* **Search and Replace:** Regular expressions are often used to find and replace text patterns in strings.
* **Parsing:** Regular expressions can be used to extract specific parts of a string.
* **Pattern Matching:** Regular expressions can help identify specific patterns within text, like dates or URLs.
 
#### 8. What is the difference between “var” and “let”?
The "var" and "let" keywords in JavaScript are used to declare variables, but they have different scoping rules.

"var" has function scope, meaning it is accessible only within the function it was declared in. If a variable is declared ,with the same, within a nested block, it will overwrite the value of the outer variable.

"let" has block scope, meaning it is accessible only within the block it was declared in. If a variable is declared,with the same name, within a nested block, it will create a new variable with its own scope, separate from the outer variable.
 
 
#### 9. What is Destructuring assignment in JavaScript?
Destructuring assignment is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables in a more concise and convenient way. It simplifies the process of accessing and working with individual elements of an array or properties of an object.

Syntax for Array Destructuring:

    const [variable1, variable2, ...] = array;
    Example of Array Destructuring:
    const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment

    const [a, b, c, d, e] = numbers;

    console.log(a); // Output: 1
    console.log(b); // Output: 2
    console.log(c); // Output: 3
    console.log(d); // Output: 4
    console.log(e); // Output: 5
In the above example, we have an array called numbers containing five elements. By using array destructuring, we assign each element of the array to individual variables a, b, c, d, and e. Now, we can access and work with each element of the array using these variables.
 
#### 10. What is spread syntax in JavaScript?
Spread syntax, often denoted by the three dots ..., is a feature introduced in ECMAScript 6 (ES6) that allows you to expand elements from one array, object, or iterable into another. It provides a concise and convenient way to copy or combine data between arrays, objects, and other iterable structures. Spread syntax can be used in various contexts within JavaScript.
 