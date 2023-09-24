// Peak Element 

// In the mysterious land of numbers, there lies a hidden peak, an element that stands tall and proud, surpassing its neighboring digits. The inhabitants of this land, represented by a 0-indexed integer array called "nums," seek to uncover this majestic peak and bring forth its enigma to light. They have tasked you with the challenge.
// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, along with the findPeakElement function, your goal is to find a peak element and return its index. If the array contains multiple peaks, you can return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -Infinity. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You are required to implement the findPeakElement function using an algorithm that runs in O(log n) time.


// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.


// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2,
// or index number 5 where the peak element is 6.
 
// Constraints:
// 1 <= nums.length <= 1000
// -2^31 <= nums[i] <= 2^31 - 1
// nums[i] != nums[i + 1] for all valid i.
 
// Hints:
// Since the goal is to find a peak element in an array with logarithmic time complexity, consider using binary search. Look for patterns where a peak element might exist based on the given conditions.
// In the binary search approach, compare the middle element of the array with its neighbors to determine if it is a peak element. If the middle element is greater than both its neighbors, return its index as a peak. If not, focus on the side where a higher element exists based on the comparison.
// Use the divide and conquer technique with binary search to narrow down the search space. Divide the array into subarrays and recursively search for peak elements in the appropriate subarray based on the comparisons made in the previous hint.



function findPeakElement(nums) {
  // Write your code inside this function only.
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid]>nums[mid+1]) {
        end=mid
    }
    else{
        start=mid+1;
    }
  }
  return start;
}
let nums = [1,2,1,3,5,6,4]
console.log(findPeakElement(nums));
