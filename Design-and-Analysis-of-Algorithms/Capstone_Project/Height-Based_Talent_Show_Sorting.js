// Height-Based Talent Show Sorting

// Mac is organizing a talent show in her community and needs to arrange the participants using the SortPeople function. The function takes two arguments: an array of names and an array of heights. The function should sort the names in descending order based on their corresponding heights. However, Mac is unsure how to use the SortPeople function. Now, Mac wants to sort the participants' names in descending order based on their heights. However, he is unsure about how to proceed.
// Can you help Mac solve this problem and provide a solution to sort the names?


// Example 1:
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.


// Example 2:
// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.


// Example 3:
// Input: names = ["Sarah", "David", "Lily"], heights = [155, 160, 150]
// Output: ["David","Sarah","Lily"]
// Explanation: When the heights [155, 160, 150] are sorted in descending order, the result is [160, 155, 150]. 
 
// Constraints:
// n == names.length == heights.length
// 1 <= n <= 10^3
// 1 <= names[i].length <= 20
// 1 <= heights[i] <= 10^5
// names[i] consists of lower and upper case English letters.
// All the values of heights are distinct.
 
// Hints:
// Consider using a sorting algorithm that involves comparing and swapping elements based on a specific condition.
// Find the tallest person and swap their position with the first person to establish descending order based on heights.
// To efficiently retrieve names based on heights, use a data structure to associate each height with its corresponding name.

var sortPeople = function (names, heights) {
  let length = heights.length;
  let map = new Map();
  for (let i = 0; i < length; i++) {
    map.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);
  let res = [];
  for (let height of heights) {
    res.push(map.get(height));
  }
  return res;
};
let names = ["Sarah", "David", "Lily"],
  heights = [155, 160, 150];
console.log(sortPeople(names, heights));
