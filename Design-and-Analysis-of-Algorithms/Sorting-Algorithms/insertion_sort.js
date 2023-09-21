function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j>=0 && arr[j]>temp){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=temp;
  }
}

const arr = [3, 9, 8, 10, 7, 1];
insertionSort(arr);
console.log(arr);

// Time Complexity O(N*N)
// Space Complexity O(1)
