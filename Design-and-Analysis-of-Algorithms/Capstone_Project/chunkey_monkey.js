// Chunky Monkey

// In a bustling school, a group of students eagerly gathered for a challenging group project. The project required them to work collaboratively, brainstorming ideas and sharing their knowledge. The students knew that to achieve success, they needed to form study groups where each group consisted of exactly three members.
// Among the students, there was a clever coder named Charlie, fondly known as Chunky Monkey. Charlie possessed a knack for solving complex problems with elegant coding solutions. As the project began, Charlie took the initiative to create a function called chunkArrayInGroups.
// Charlie's function had a vital role in dividing the students into study groups of three. The function took an array containing the names of all the students and split them into smaller arrays, each consisting of three students. The goal was to ensure that every group had an equal number of students and that no one felt left out or overloaded. Chunky Monkey is a game that splits the group into parts on the given key.
// Let's say you have a list of students, and you want to divide them into study groups for a group project. You have an array of student names, and you want to split them into groups of 3. You can use the chunkArrayInGroups function to accomplish this.


// Example 1:
// Input: arr = ["a", "b", "c", "d"], N = 2
// Output: [["a", "b"], ["c", "d"]]


// Example 2:
// Input: arr = [0, 1, 2, 3, 4, 5], N = 3
// Output: [[0, 1, 2], [3, 4, 5]]


// Example 3:
// Input: arr = [0, 1, 2, 3, 4, 5], N = 2
// Output: [[0, 1], [2, 3], [4, 5]]
 
// Hints:
// Use of inbuilt slice( ) method
// Keep track of the current index position within the array.




// Traditional Approach

function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

// Optimized Approach

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}

// Provide your comparison here.

// Traditional approach

// It use for loop to iterate over every element of the array
//  In additional need to check if any elements is present in temp array or not. It more complex to code , read and understand due to manaual check and create subarray.

// Optimized approach

// In these simply used slice function to get a chunk of array of size length
// It is simpler to code ,read and understand due to its used functionality of slice function
