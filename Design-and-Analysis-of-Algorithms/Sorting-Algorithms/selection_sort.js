function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
        [arr[i], arr[min]] =[arr[min],arr[i]];
    }
  }
}

const arr = [3, 9, 8, 10, 7, 1];
selectionSort(arr);
console.log(arr);

// Time Complexity O(N*N)
// Space Complexity O(1)
