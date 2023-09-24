// The Power of Two Puzzle

// Sarah, a dedicated mathematician and puzzle enthusiast, stumbled upon an intriguing challenge while delving into her research. She contemplated the creation of an IsPowerOfTwo function, which takes a positive integer n as an argument and aims to discern whether the given number qualifies as a power of two. In mathematical terms, an integer n is deemed a power of two if it can be represented as 2 raised to an integer exponent. For example, 8 is a power of two because it can be written as 2³. 
// How would you tackle this problem?

// Example 1:
// Input: n = 16
// Output: true
// Explanation: Since 16 can be expressed as 2^4, the function returns True,
// indicating that 16 is indeed a power of two.

// Example 2:
// Input: n = 5
// Output: false
// Explanation: Since there is no integer exponent that can yield 2 when raised to that exponent,
// the function returns False, indicating that 5 is not a power of two.

// Example 3:
// Input: n = 64
// Output: true
// Explanation: Given that 64 can be represented as 2^6, the function returns True,
// affirming that 64 is indeed a power of two.
 
// Hints:
// To determine if a number is a power of two, think about the properties of a power of two. What is unique about their binary representation?
// Consider the binary representation of a power of two. What pattern do you notice when subtracting one from a power of two?


function isPowerOfTwo(n) {
    
    return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(12));