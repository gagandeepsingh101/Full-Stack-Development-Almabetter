// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:
// Input:
// nums = [1,2,3]

// Output:
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input:
// nums = [0,1]

// Output:
// [[0,1],[1,0]]

// Constraints:
// 1 <= nums.length <= 6
// 10 <= nums[i] <= 10
// All the integers of nums are unique.


var permute = function (nums) {
    // Your code goes here
    let res = [];
    let iterate = function (nums, i) {
        if (i === nums.length) {
            res.push(nums.slice(0));
        }
        for (let j = i; j < nums.length; j++) {
            [nums[j], nums[i]] = [nums[i], nums[j]]
            iterate(nums, i + 1);
            [nums[j], nums[i]] = [nums[i], nums[j]]
        }
    }
    iterate(nums, 0);
    return res;
};

console.log(permute([1,2,3]))