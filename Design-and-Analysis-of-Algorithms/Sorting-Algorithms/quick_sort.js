function quickSort(arr) {
  // Your code goes here
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [3, 9, 8, 10, 7, 1];
console.log(quickSort(arr));
// Time Complexity O(NlogN)
// Space Complexity O(N)
