// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.




// Example 1:
// Input:
// nums = [1,3,5,6], target = 5
// Output:
// 2
// Explanation:
// 5 exist at index 2



// Example 2:
// Input:
// nums = [1,3,5,6], target = 2
// Output:
// 1
// Explanation:
// 2 will exist at Index 1 between 1 and 3



// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


var searchInsert = function (nums, target) {
    // Your code goes here 
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return start;
};