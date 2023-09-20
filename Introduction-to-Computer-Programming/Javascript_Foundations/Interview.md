# Interview Prep

#### 1. Can you discuss any performance considerations around using Maps in JavaScript?

Yes, there are some performance considerations when using Maps in JavaScript.

<ul>
<li><strong> Insertion and deletion: </strong> Maps are efficient when it comes to inserting and deleting key-value pairs. This is because Maps use a hash table, which allows for fast lookups, insertions, and deletions of elements.</li>
<br>
<li><strong> Lookup time :</strong> Maps have constant-time lookup, which is much faster than looking up values in an array or object.</li>
<br>

<li><strong> Size: </strong> Maps can grow dynamically in size, so there is no need to pre-allocate a specific amount of memory as with arrays.</li>
<br>
<li><strong> Garbage collection: </strong> Maps use more memory than plain objects or arrays because they maintain a key-value mapping, but this memory can be freed automatically by the JavaScript garbage collector when it is no longer needed.</li>
<br>

<li><strong> Iteration: </strong> Maps have a specific iteration order, which is based on the order in which keys were added to the Map. This makes Maps useful when you need to maintain the insertion order of elements, whereas objects do not have a guaranteed iteration order.</li>
</ul>
 
#### 2. Can you explain the difference between shallow and deep copying in JavaScript and give an example of each?

Shallow copying and deep copying are two methods of copying objects in JavaScript. The difference between them is in how they handle nested objects.

Shallow copying is a method of copying objects where only the top-level properties are copied, but any nested objects are referenced, not copied. In other words, if you make a change to a nested object in the copied object, it will also affect the original object, because they both reference the same nested object.

Deep copying, on the other hand, is a method of copying objects where all properties, including nested objects, are copied to a new object. In this way, the original object and the copied object are completely separate, and changes made to one will not affect the other.

#### 3. How does a dynamic array differ from a basic array?

Dynamic arrays are arrays that can change their size during runtime. Unlike basic arrays, which have a fixed size determined at declaration, dynamic arrays automatically adjust their size based on the number of elements being stored. This means that you can add or remove elements from a dynamic array as needed without having to worry about manually resizing the array.

In contrast, basic arrays have a fixed size and do not dynamically adjust their size during runtime. This can lead to issues if a basic array's size is insufficient to store all of the elements and can result in data being overwritten or lost. Basic arrays are typically stored in a contiguous memory block, with the elements stored directly in the array.

#### 4. Can you discuss the security considerations around JSON parsing?

JSON parsing is a process of converting JSON data into a readable format. There are several security considerations around JSON parsing, including:

<li><strong>Code Injection:</strong> JSON data could contain malicious code that can be executed when parsed, leading to code injection attacks.</li>
<br>
<li><strong>Denial of Service (DoS):</strong> Maliciously crafted JSON data can cause the parsing process to consume a large amount of resources, leading to a denial of service attack.</li>
<br>

<li><strong>Unintended Data Exposure:</strong> If a JSON parser does not properly validate the input data, it may expose sensitive information such as passwords, tokens, or other confidential data.</li>
<br>
<li><strong>Cross-Site Scripting (XSS):</strong> Malicious JSON data can contain scripts that are executed by the client when parsed, leading to cross-site scripting attacks.

To prevent these security issues, it is important to validate and sanitize the input data before parsing it and to use a JSON parser that implements proper security measures. Additionally, applications should avoid using untrusted sources for JSON data and always validate the data received from trusted sources as well.</li>
</ul>

#### 5. What is the difference between slice and splice in JavaScript arrays?

slice is a method used to extract a portion of an array and return it as a new array. It does not modify the original array, while splice is a method used to add, remove, or replace elements in an array. It modifies the original array.
 
#### 6. What is a return statement in a function, and why is it important?

A return statement in a function specifies the value that should be returned by the function when it's called. It is important because it allows a function to produce a value that can be used in the calling code. Without a return statement, a function will execute its code but not produce any output that can be used outside the function.
 
#### 6. What is the difference between “var” and “let”?

The "var" and "let" keywords in JavaScript are used to declare variables, but they have different scoping rules.

"var" has function scope, meaning it is accessible only within the function it was declared in. If a variable is declared ,with the same, within a nested block, it will overwrite the value of the outer variable.

"let" has block scope, meaning it is accessible only within the block it was declared in. If a variable is declared, with the same name, within a nested block, it will create a new variable with its own scope, separate from the outer variable.

 
#### 8. What is the difference between client-side and server-side rendering?
Client-side rendering and server-side rendering are two different approaches to rendering web pages.

Client-side rendering (CSR) refers to the process of rendering a web page on the client side, meaning the browser. With this approach, the server sends the bare minimum of HTML, CSS, and JavaScript required to display the page, and the browser then requests the remaining data and renders the page. This approach can result in a faster initial load time since only the necessary data is initially sent, but it can also lead to slower subsequent page loads if the JavaScript needs to be optimized.

On the other hand, server-side rendering (SSR) means the process of rendering a web page on the server before sending it to the client. With this approach, the server sends a fully rendered HTML document to the browser, which results in faster subsequent page loads. However, the initial load time may be slower since the server must render the entire page before sending it to the browser.
 
#### 9. How does setTimeout() work under the hood in JavaScript?

When you call setTimeout(), the specified code is not actually executed immediately. Instead, it is added to a queue of tasks that need to be executed by the JavaScript runtime. The JavaScript runtime has an event loop that constantly checks this queue for pending tasks.

When a task is added to the queue, the event loop checks if there are any other pending tasks in the queue. If there are, it executes them first in the order in which they were added. If there are no other pending tasks, the event loop waits until the specified delay has passed before executing the setTimeout() task.
 
#### 10. What is the difference between composition and inheritance in object-oriented programming?
 Composition | Inheritance
 |----|----|
 |A design principle that suggests creating complex objects by combining simpler ones| A mechanism for creating new classes based on existing ones|
 |The composed objects are stored as properties of the parent object|The child class inherits properties and methods from the parent class|
 |Allows for greater flexibility and modularity, as objects can be easily swapped in and out|Can lead to tight coupling and inflexibility, as changes to the parent class can affect all child classes|
 |Encourages a "has-a" relationship between objects|Encourages an "is-a" relationship between classes|
 |Examples in JavaScript include using object literals to compose objects or using libraries like Lodash to create composite functions|Examples in JavaScript include creating child classes using the extends keyword or using the Object.create() method to create objects with a specified prototype
