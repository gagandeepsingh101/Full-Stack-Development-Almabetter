// Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:
// Input:
// n = 1

// Output:
// true

// Explanation:
// 2^0

// Example 2:
// Input:
// n = 3

// Output:
// false

// Constraints:
// 231 <= n <= 231 - 1


var isPowerOfTwo = function(n) {
    // Your code goes here       
    return n>0 && (n&n-1)===0;
 };


 console.log(isPowerOfTwo(8));