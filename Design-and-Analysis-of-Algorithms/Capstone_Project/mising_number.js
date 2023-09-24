// Missing Number

// In a classroom, there are n students present at the time. Each student is identified by a unique number in the range [0, n]. You are given an array nums containing n distinct numbers in the range [0, n]. Implement the missingNumber function that takes in the array nums and returns the student number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2

// Example 2:
// Input: nums = [0,1]
// Output: 2
 
// Constraints:
// n == nums.length
// 1 <= n <= 10^4
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 


// Traditional Approach

var missingNumber = function(arr) {
    let n=arr.length;
     let hashSet = new Set();
 
  // Add all elements of array to hashset
  for (let i = 0; i < n ; i++) {
    hashSet.add(arr[i]);
  }
 
  // Check each integer from 1 to n
  for (let i = 1; i <= n; i++) {
    // If integer is not in hashset, it is the missing integer
    if (!hashSet.has(i)) {
      return i;
    }
  }
 
  // If no integer is missing, return n+1
  return 0;
};

// Optimized Approach

var missingNumber = function(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};


// Provide your comparison here.

// Traditional Approach
// 1. Time complexity is O(N) beacuse its iterates over arr two times .First for initializing value in hashset.Second time for return missing number if find

// 2. Space complexity is O(N) because it use extra to store arr elements in it

// 3. It is moderate efficient because its used extra space 
// Optimized approach 
//1. Time complexity is O(N) beacause its iterates over arr two times .First for arrange the elements in increasing sequence. Second time find missing number if not find then return arr.length+1

//2. Space complexity is O(1) beacause its use in-place swapping algorithm which moves elements in its correct position according index in these functions.

// 3. It is highly efficient because its rearrange using in-place algorithms