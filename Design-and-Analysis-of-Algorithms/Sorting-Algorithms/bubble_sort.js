function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
}

const arr = [3, 9, 8, 10, 7, 1];
bubbleSort(arr);
console.log(arr);

// Time Complexity O(N*N)
// Space Complexity O(1)
