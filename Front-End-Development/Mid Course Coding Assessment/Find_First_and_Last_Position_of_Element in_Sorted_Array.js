// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input:
// nums = [5,7,7,8,8,10] target = 8

// Output:
// [3,4]

// Example 2:
// Input:
// nums = [5,7,7,8,8,10]

// Output:
// target = 6

// Constraints:
// - 0 <= nums.length <= 105
// - 109 <= nums[i] <= 109
// - nums is a non-decreasing array.
// - 109 <= target <= 109

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
var searchRange = function (nums, target) {
  // Your code goes here
  let start = 0;
  let end = nums.length - 1;
  let ans = [-1,-1];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      while (nums[start] != target) {
        start++;
      }
      while (nums[end] != target) {
        end--;
      }
      ans[0] = start;
      ans[1] = end;

      return ans;
    } else if (nums[mid] > target) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
  }
  return ans;
};
console.log(searchRange(nums, target));
