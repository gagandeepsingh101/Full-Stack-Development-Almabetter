// Chasing Happiness through Numbers

// Alice loves playing with numbers, and she recently came across a fascinating concept called happy numbers. A happy number starts with any positive integer, and she wants to create an algorithm to determine if a given number is happy or not using the isHappy function. The isHappy function takes a positive integer n as an argument, returns true if the number is happy, and false otherwise. A number is considered happy if the process of summing the squares of its digits eventually leads to 1. This process should repeat until the number either becomes 1 or gets caught in an endless loop.


// Example 1:
// Input: n = 19
// Output: true
// Explanation: 
//     1^2 + 9^2 = 1 + 81 = 82
//     8^2 + 2^2 = 64 + 4 = 68
//     6^2 + 8^2 = 36 + 64 = 100
//     1^2 + 0^2 + 0^2 = 1
//     The process ends with 1, so 19 is a happy number.


// Example 2:
// Input: n = 4
// Output: false
// Explanation:
//     4^2 = 16
//     1^2 + 6^2 = 1 + 36 = 37
//     3^2 + 7^2 = 9 + 49 = 58
//     5^2 + 8^2 = 25 + 64 = 89
//     8^2 + 9^2 = 64 + 81 = 145
//     1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42
//     4^2 + 2^2 = 16 + 4 = 20
//     2^2 + 0^2 = 4
//     The process enters a cycle: 4 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4...
//     Since the process does not end with 1, 4 is not a happy number.


// Example 3:
// Input: n = 7
// Output: true
// Explanation:
//     7^2 = 49
//     4^2 + 9^2 = 16 + 81 = 97
//     9^2 + 7^2 = 81 + 49 = 130
//     1^2 + 3^2 + 0^2 = 1 + 9 + 0 = 10
//     1^2 + 0^2 = 1
//     The process ends with 1, so 7 is a happy number.
 
// Constraints:
// 1 <= n <= 2^31 - 1
 
// Hints:
// Think about the process of finding a happy number as a sequence of transformations. How can you break down the number into its individual digits and perform operations on them?
// Consider using a set or a similar data structure to keep track of the numbers encountered during the process. This can help you detect if the sequence enters into a loop.
// Think about different algorithms or techniques that can help identify loops in a more efficient manner.
 
// Approach : Rewrite the above code using Set Object.


function isHappy(n) {
  // Helper function to calculate the sum of squares of digits
  let set = new Set();
  function calculateSumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  while (n !== 1) {
    let sum = calculateSumOfSquares(n);
    if (set.has(sum)) {
      return false;
    } else {
      set.add(sum);
      n = sum;
    }
  }
  return true;
}
console.log(isHappy(19));
