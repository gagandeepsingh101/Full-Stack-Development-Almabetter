// Number Shuffle: Missing & Duplicated

// Sara, a diligent mathematician, was tasked with organizing a set of numbers from 1 to n. However, a puzzling error occurred during the process. One of the numbers mysteriously duplicated itself, causing another number to go missing entirely. Frustrated by this unexpected turn of events, Sara seeks your help in solving this conundrum. She provides you with an integer array nums, which represents the current state of the set after the error. Can you lend a hand to Sara by using the findErrorNums function to determine which number was duplicated and which number is now missing?


// Example 1:
// Input: [1, 2, 2, 4]
// Output: [2, 3]
// Explanation: The duplicated number is 2, and the missing number is 3.


// Example 2:
// Input: [3, 2, 3, 4, 5]
// Output: [3, 1]
// Explanation: The duplicated number is 3, and the missing number is 1.


// Example 3:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 8]
// Output: [8, 9]
// Explanation: The duplicated number is 8, and the missing number is 9.
 
// Constraints:
// 2 <= nums.length <= 10^4
// 1 <= nums[i] <= 10^4
 
// Hints:
// Consider using a data structure that efficiently checks for duplicates and missing elements.
// Think about how you can track the occurrences of numbers in the input array.
// Can you determine the missing number by considering the range of possible numbers?


var findErrorNums = function (nums) {
  const hashmap = new Map();
  const output = [];
  let maxValue = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hashmap.has(num)) {
      output.push(num); 
    }
    hashmap.set(num, i);
    maxValue = Math.max(maxValue, num);
  }
  for (let i = 1; i < maxValue + 1; i++) {
    if (!hashmap.has(i)) {
      output.push(i);
      break;
    }
  }
  if (output.length < 2) {
    output.push(maxValue + 1);
  }
  return output;
};

let nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); 