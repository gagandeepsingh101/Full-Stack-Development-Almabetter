// Finding Pair with Given Sum

// In a faraway village, there lived two brothers, Jack and William. They were exceptional treasure hunters who ventured into ancient ruins searching for hidden riches. One day, they stumbled upon a mystical array of ancient numbers. Legend had it that a pair of numbers within the array, when added together, would unlock a hidden door leading to unimaginable treasures. Eager to uncover the riches, the brothers needed your help to write a function that would find the pair of numbers with a given sum from the array.
// Write a JavaScript function, findPairWithSum, that takes an array of integers arr and a target sum N as input. The function should return an array containing the pair of numbers that add up to the target sum. If no such pair exists, return an empty array.


// Example 1:
// Input: arr = [3, 7, 10, 2, 9, 1], N = 12
// Output: [3, 9]


// Example 2:
// Input: arr = [2, 7, 11, 15], N = 9
// Output: [2, 7]
 
// Constraints:
// The array will have at least two elements and can contain up to 10^5 elements.
// Each element in the array will be an integer ranging from -10^9 to 10^9.
// There will be exactly one pair of numbers that add up to the target sum.




// Traditional Approach

function findPairWithSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

// Optimized Approach

function findPairWithSum(array, targetSum) {
  const numMap = {};

  for (let i = 0; i < array.length; i++) {
    const difference = targetSum - array[i];
    if (numMap[array[i]]) {
      return [difference, array[i]];
    }
    numMap[difference] = true;
  }

  return [];
}

// Provide your comparison here.

// Traditional Approach
// 1. Time Complexity : O(N*N) because it use double for loops iterates arr like matrix 

// 2. Space Complexity : O(1) because it use constant space for iteration  

// 3. In these approach simply iterates over elements using double for loops and check if sum of element at i th place and element at j th place in array is equal to target element if its is equal to return array of both elements otherwise moves to next iteration.If not pair sum found simply return empty array

// 4. It not efficient and scalability for large inputs array due it unnecessary comparisons and quadratic time complexity respectively

// Optimized Approach

// 1. Time Complexity : O(N) because its iterate over array with single for loop

// 2. Space Complexity : O(N) because it use a map to store the difference of every element in the array to the targetSum with value true

// 3. In these approach simply iterates over elements with single for loop and find if current element is present in the map or not if its present return array of difference and current element otherwise skip and store the difference in map with value true . if no any pair found simply return empty array

// 4. It is efficient and scalability for large inputs array due it avoid unnecessary comparisons and linear time complexity respectively
