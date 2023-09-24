// First and Last Position of Element in Sorted Array 

// In the ancient kingdom of Numeria, there was a mystical array that held great powers. Legend had it that this array contained the secrets of finding the elusive target value. The array was known for its unique property of being sorted in non-decreasing order, which made it a perfect ground for seekers to unravel its mysteries.
// Deep within the kingdom, there lived a skilled adventurer named Aria, known for her prowess in deciphering ancient algorithms. When news spread of the mystical array and the searchRange function, Aria embarked on a quest to harness its power and utilize the searchRange algorithm to find the starting and ending positions of a given target value.
// The searchRange function takes an array of integer nums sorted in non-decreasing order, a target value target, and returns a pair of integers representing the starting and ending positions of the target value in the array.
// If the target value is not found in the array, the function returns [-1, -1].
// Aria is determined to write an algorithm that utilizes the searchRange function and achieves a runtime complexity of O(log n).


// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]


// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]


// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
 
// Constraints:
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non-decreasing array.
// -10^9 <= target <= 10^9
 
// Hints:
// Consider using the binary search algorithm to find the target value in the sorted array. 
// To find the starting and ending positions of the target value, modify the binary search algorithm slightly. Instead of stopping when the target value is found, continue the search to find the leftmost and rightmost occurrences of the target value.
// Keep track of the leftmost and rightmost indices where the target value is found during the binary search. Update these indices whenever a match is found in the left or right half of the array.

// Approach : Rewrite the above given JavaScript code using the Binary search algorithm.


var searchRange = function (nums, target) {
  function binarySearchModifiied(flag) {
    let result = 0;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        result=mid;
        if (flag) {
          end=mid-1
        } else {
          start = mid+1;
        }
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return result;
  }
  return [binarySearchModifiied(true),binarySearchModifiied(false)]; 
};
let nums = [5, 7, 7, 8, 8, 10],
  target = 8;
console.log(searchRange(nums, target));
