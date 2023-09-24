// Maximum Count - Positive Integer and Negative Integer 

// Once upon a time, in the enchanting land of Numeria, there existed a mystical array called "Nums." This array, unlike ordinary arrays, possessed a special property - it was sorted in non-decreasing order. Legends spoke of the powers hidden within this array, which could unveil the balance of positive and negative energies. Curiosity filled the hearts of the people as they wondered about the maximum force that could be harnessed.
// Deep in the realm of Numeria, a brave adventurer named Alara set forth on a quest to discover the answer. Armed with a keen eye, a mystical algorithm, and the maxCount function, Alara embarked on a journey through the array. With each step, she encountered numbers that revealed the secrets of their nature - positive, negative, or simply zero, a neutral force. As Alara traversed the array, she carefully used the maxCount function to tally the count of positive and negative integers, keeping track of their powers.
// Given an array nums sorted in non-decreasing order, return the result of the maxCount function applied to the number of positive integers and the number of negative integers in the nums array. In other words, if the number of positive integers is pos and the number of negative integers is neg, then calculate maxCount(pos, neg) and return the result.
// Note that 0 is neither positive nor negative.


// Example 1:
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.


// Example 2:
// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.


// Example 3:
// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.
 
// Constraints:
// 1 <= nums.length <= 2000
// -2000 <= nums[i] <= 2000
// nums is sorted in non-decreasing order.



function maxCount(nums) {
  // Write your code inside this function only.
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos++;
    } else {
      neg++;
    }
  }
  return Math.max(pos, neg);
}
let nums = [-2, -1, -1, 1, 2, 3];
console.log(maxCount(nums));
