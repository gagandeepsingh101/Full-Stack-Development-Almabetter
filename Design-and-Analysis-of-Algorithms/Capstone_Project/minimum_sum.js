// Minimum Sum of Four-Digit Numbers After Splitting Digits 

// Once upon a time, in a magical land, there was a mysterious number called num that held great power. The number num consisted of exactly four digits and was said to possess a hidden secret. The curious inhabitants of the land were eager to uncover this secret and unravel the power within.
// Legend had it that by splitting num into two new integers new1 and new2 using the digits found in num the secret would be revealed. The people embarked on a quest to find the perfect split, ensuring that all the digits in num were utilized and allowing for leading zeros in new1 and new2.
// As the adventurers delved into the mysteries of num they discovered various combinations that could unlock its secrets. They realized that the key to revealing the secret lay in finding the minimumSum possible sum of new1 and new2. You are given a positive integer num consisting of precisely four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used. Return the minimumSum function to the minimum possible sum of new1 and new2.


// Example 1:
// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.


// Example 2:
// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
 
// Constraints:
// 1000 <= num <= 9999
 
// Hints:
// To find the minimum possible sum of new1 and new2, one approach is to sort the digits in num in ascending order and split them into two new numbers. The first new number (new1) should have the smallest digits, and the second new number (new2) should have the remaining digits.
// Consider the fact that the given num is a four-digit positive integer. Think about how you can split the digits in a way that minimizes the sum of new1 and new2. What arrangement of digits would result in the smallest possible sum?


function minimumSum(num) {
  // Write your code inside this function only.
  let numStr = ("" + num).split("");
  numStr.sort((a, b) => a - b);
  let firstNum = numStr[0]+numStr[2];
  let secondNum =numStr[1]+numStr[3];
  return Number(firstNum)+Number(secondNum);
}
console.log(minimumSum(4009));
