// Transition Point 

// Once upon a time, in a distant land, there existed a peaceful village named Binaryville. The village was inhabited by a unique group of people known as the "Binaryians." These Binaryians were distinguished by their unusual way of life, where they embraced the simplicity of binary numbers. Every aspect of their daily routine revolved around the concept of zeros and ones.
// One fine day, an extraordinary event occurred in Binaryville. A messenger arrived with a scroll containing a sorted array of zeros and ones. The village elders were intrigued by this mysterious array and immediately called for a gathering at the village square. They believed that the array held the key to unraveling the secrets of their existence.
// Using the transitionPoint function with arguments arr, where the array contains only 0s and 1s, find the transition point.
 

// Example 1:
// Input: arr[] = [0,0,0,1,1]
// Output: 3
// Explanation: index 3 is the transition point where 1 begins.


// Example 2:
// Input: arr[] = [0,0,0,0]
// Output: -1
// Explanation: Since, there is no "1",
// the answer is -1.
 
// Constraints:
// 1 ≤ N ≤ 500000
// 0 ≤ arr[i] ≤ 1
 
// Hints:
// Binary Search Approach: Use binary search to find the transition point in the sorted array.
// Linear Scan Approach: Iterate through the sorted array from left to right.



function transitionPoint(arr) {
  // Write your code inside this function only.

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0 && arr[i + 1] === 1) {
      return i + 1; 
    }
  }
  return -1; 
}
let arr = [0, 0, 0, 1, 1];
console.log(transitionPoint(arr));
