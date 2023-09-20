# Introduction to DSA

### 1. Getting Started with DSA

1. Data structures are a mechanism for organizing and storing data in a specific relationship for improved storage and organization.

2. Data structures can be classified into two categories: primitive and non-primitive. Primitive data structures include number, string, boolean, null, undefined, and symbol. Non-primitive data structures include arrays, maps, linked list, stack , treesetc.

3. Linear data structures arrange data sequentially with one predecessor and successor. In contrast, non-linear data structures arrange data in a non-linear sequence with multiple predecessors and successors.

4. Static data structures have a fixed size, and their memory is allocated at compile time. In contrast, dynamic data structures can grow or shrink dynamically at runtime, and their memory is allocated at runtime.

5. Understanding data structures is important for designing and implementing efficient algorithms, especially when dealing with large amounts of data.

6. An algorithm is a set of instructions or logical steps written in a specific order to achieve a predetermined task. It must have inputs, at least one output, definiteness, finiteness, and correctness.

7. Algorithmic analysis helps determine the efficiency of an algorithm in terms of space and time complexity. Space complexity is the amount of memory required to run an algorithm, while time complexity is the time the algorithm takes to execute each set of instructions.

8. The performance of an algorithm is closely linked to its data structures and operations, and it's important to choose the most efficient algorithm for a given task to save time and computational resources.

9. Asymptotic analysis is a technique to compare the efficiency of algorithms using asymptotic notation. It compares time and space complexity using three notations: O, Ω, and Θ.

10. Big-O(O) provides an upper bound for worst-case runtime, Big-Omega(Ω) provides a lower bound for best-case runtime, and Big-Theta(Θ) represents both upper and lower bounds on the runtime growth rate.

11. Algorithm efficiency analysis includes best, average, and worst-case scenarios to choose the most efficient algorithm for a given problem. The best case is the shortest, the worst case is the longest, and the average is the meantime for all possible inputs.

### 2. Arrays & Strings

1. Arrays are like these containers in JavaScript that hold a bunch of different data items.

2. Arrays start counting from zero, so the first item in an array is actually the zeroth item.

3. You can make an array using either the array literal or array constructor syntax - both work great!

4. Arrays can hold all sorts of different data types, like strings, numbers, objects, and even other arrays, so they're really versatile.
5. There are two main types of arrays: one-dimensional arrays (for simple lists) and multi-dimensional arrays (for more complex data).

6. To add something to an array, you can just use the push() or unshift() method, and to remove something, use the pop() or shift() method.

7. Strings are fundamental data types that are used to represent text. They are used in a wide range of applications, from simple text messages to complex web applications.

8. Strings can be created using either single or double quotes, depending on the programmer's preference.

9. One of the most powerful features of strings in JavaScript is their ability to be concatenated using the + operator. This allows programmers to combine multiple strings into a single, larger string easily.

10. Strings in JavaScript are immutable, which means that once they are created, they cannot be changed. This can be a limitation in some applications, but it also provides a level of security and reliability in programs that rely on strings.

### 3. Introduction to Pattern Matching

1. Pattern matching is crucial for Google's search engine and advertising platforms, enabling accurate search results and targeted advertisements based on user queries and web page patterns.

2. Pattern matching is a fundamental concept in computer science that involves finding specific sequences of characters (patterns) within larger sequences like strings or texts.

3. It is widely used in various applications such as text processing, data analysis, compiler design, regular expressions, and more.

4. Pattern matching involves defining a pattern and searching for its occurrences in the input text.

5. Regular expressions are powerful tools used for pattern matching in JavaScript, allowing for searching, extracting, and manipulating text based on specific patterns.

6. The Naive String Matching Algorithm compares each character of the pattern with each character of the main string to find occurrences of the pattern.

7. The Finite Automaton Algorithm uses a finite automaton (FSM) represented as a directed graph to efficiently match patterns against the main string.

8. The Boyer-Moore Algorithm is an efficient pattern matching algorithm that compares characters of the pattern with characters of the main string from right to left, utilizing bad character and good suffix rules.

9. Pattern matching has diverse use cases, including text editors, search engines, virus detection, genetics, plagiarism detection, and natural language processing.

10. By leveraging pattern matching algorithms, computers can efficiently process large amounts of data, making it possible to perform complex tasks accurately and quickly.