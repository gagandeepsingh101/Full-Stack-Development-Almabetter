// You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:

// Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
// Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
// Keep repeating the steps again, alternating left to right and right to left, until a single number remains.
// Given the integer n, return the last number that remains in arr.

// Example 1:
// Input:
// n = 9

// Output:
// 6

// Explanation:
// arr = [1, 2,3, 4,5, 6,7, 8,9] arr = [2,4, 6,8] arr = [2, 6] arr = [6]

// Example 2:
// Input:
// n = 1

// Output:
// 1

// Constraints:
// - 1 <= n <= 109

let n = 9;

const lastRemaining = function (n) {
  // Your code goes here
  let leftToRight = true;  // Yeh flag hai ki hum left se right ja rahe hain ya right se left.
  let remaining = n;      // 'n' ki value ko track karte hain.
  let step = 1;           // Har step par kitne numbers skip karne hain, shuruat mein 1.
  let head = 1;           // Current position ya starting point.

  while (remaining > 1) {
      if (leftToRight || remaining % 2 === 1) {
          head += step;
      }

      remaining = Math.floor(remaining / 2);  // Remaining numbers ko half karte jao.
      step *= 2;  // Step ko double karte jao.
      leftToRight = !leftToRight;  // Direction change karo, left se right ya right se left.
  }
  return head;
};
console.log(lastRemaining(n));
