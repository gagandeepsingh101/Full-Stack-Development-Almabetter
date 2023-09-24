// The Enchanted Array Shuffling

// In the enchanting realm of Algorithmia, there lived a young magician named Ethan. Ethan possessed extraordinary coding skills and had a deep understanding of arrays and their manipulation. One fateful day, he stumbled upon an ancient scroll hidden within the depths of a mystical forest. The scroll contained a magical secret about array shuffling. Filled with curiosity, Ethan embarked on a coding journey to unravel the hidden powers of the scroll.
// The ancient scroll presented Ethan with a unique challenge: to shuffle a given array into a specific order by following a set of magical rules. The array, named originalArray, consisted of distinct positive integers. Ethan needed to create a function, enchantedArrayShuffling(originalArray), to perform the shuffling. The rules were as follows:
// The shuffled array should begin with the smallest element of originalArray.
// The subsequent elements should alternate between the next smallest and largest values of originalArray.
// If there are remaining unplaced elements, they should be appended in ascending order at the end of the shuffled array.


// Example 1:
// Input: [4, 9, 2, 14, 7]
// Output: [2, 14, 4, 9, 7]

// Explanation:
// The smallest element is 2. It starts the shuffled array.
// The next smallest element is 4, and the next largest element is 14. They alternate.
// The next smallest element is 7.
// The next smallest element is 9.
// No elements are left, so the shuffled array is complete.


// Example 2:
// Input: [5, 1, 8, 3, 10, 2]
// Output: [1, 10, 2, 8, 3, 5]

// Explanation:

// The smallest element is 1. It starts the shuffled array.
// The next smallest element is 2, and the next largest element is 10. They alternate.
// The next smallest element is 3, and the next largest element is 8. They alternate.
// The remaining elements [5] are placed in ascending order at the end.
 
// Constraints:
// The input originalArray will contain at least two elements and, at most, 100 elements.
// Each element of originalArray will be a distinct positive integer between 1 and 1000 (inclusive).

 
 
 
 // Traditional Approach

function enchantedArrayShuffling(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];
  
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left <= right) {
      if (left === right) {
        shuffledArray.push(sortedArray[left]);
      } else {
        shuffledArray.push(sortedArray[left]);
        shuffledArray.push(sortedArray[right]);
      }
  
      left++;
      right--;
    }
  
    return shuffledArray;
  }
  
  // Optimized Approach
  
  function enchantedArrayShuffling(originalArray) {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    const shuffledArray = [];
  
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      shuffledArray.push(sortedArray[left++]);
      shuffledArray.push(sortedArray[right--]);
    }
  
    if (left === right) {
      shuffledArray.push(sortedArray[left]);
    }
  
    return shuffledArray;
  }
  
  
  
  // Provide your comparison here.
  
//   Both traditional and optimized approach have same time complexity and space complexity and use same logic but diffence in the way of using while or if condition . 
// In traditional approach while loop work until left less than or equal to right.In while loop it if left equal to right then the element pree push into result array otherwise push both elements present at left and right position respectively in input array into result array

// In optimized approach approach loop work until left less than right . In for loop it push elements in result array which are  present in left and right position respectively in input array. after termination of while loop check if left equal to right then push elements in result array which present at left position in input array