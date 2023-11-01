// Majority Element
// Easy
// solved
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input:
// nums = [3,2,3]

// Output:
// 3

// Example 2:
// Input:
// [2,2,1,1,1,2,2]

// Output:
// 2

// Constraints:
// - n == nums.length
// - 1 <= n <= 5 * 104
// - 109 <= nums[i] <= 109


const majorityElement = function(nums){
    // Your code goes here
    nums.sort();
    return nums[Math.floor(nums.length-1)/2];
};

let nums = [3,2,3];
console.log(majorityElement(nums));