// Color sorting

// Once upon a time, in a vibrant land filled with colorful objects, there existed an array called nums that held a collection of objects. Each object was uniquely colored red, white, or blue, symbolizing different aspects of life. However, the array was in chaos, with colors scattered randomly, disrupting the harmony of the land. The wise elders of the land devised a plan to restore order and bring balance to the array by utilizing the sortColors function, which takes the array nums as its argument.
// Given an array nums with n objects colored red, white, or blue, and using the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.


// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]


// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]
 
// Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
 
// Hints:
// Use a three-pointer approach to partition the array into three sections: red, white, and blue. Initialize three pointers: redPtr, whitePtr, and bluePtr. Iterate through the array and perform the following operations:
// If the current element is 0, swap it with the element at the redPtr position and increment both redPtr and whitePtr.
// If the current element is 1, increment whitePtr.
// If the current element is 2, swap it with the element at the bluePtr position and decrement bluePtr. Note that after the swap, the current element should be re-evaluated without incrementing whitePtr.



function sortColors(nums) {
  // Write your code inside this function only.
  let redPtr = 0;
  let whitePtr = 0;
  let bluePtr = nums.length - 1;
  for (let i = 0; i <= bluePtr; i++) {
    if (nums[i] == 0) {
      [nums[redPtr], nums[i]] = [nums[i], nums[redPtr]];
      redPtr++;
      whitePtr++;
    } else if (nums[i] == 1) {
      whitePtr++;
    } else if (nums[i] == 2) {
      [nums[bluePtr], nums[i]] = [nums[i], nums[bluePtr]];
      bluePtr--;
    }
  }
}

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
