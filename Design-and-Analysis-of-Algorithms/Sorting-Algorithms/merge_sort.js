function mergeSort(arr, l, r) {
  // Your code goes here
  if (l < r) {
    let mid = Math.floor((l + r) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, r, mid);
  }
  return arr;
}
function merge(arr, l, r, mid) {
  let res = [];
  let left = l;
  let right = mid + 1;
  while (left <= mid && right <= r) {
    if (arr[left] < arr[right]) {
      res.push(arr[left]);
      left++;
    } else {
      res.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    res.push(arr[left]);
    left++;
  }
  while (right <= r) {
    res.push(arr[right]);
    right++;
  }
  for (let i = l; i <= r; i++) {
    arr[i] = res[i - l];
  }
}
const arr = [3, 9, 8, 10, 7, 1];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

// Time Complexity O(NlogN)
// Space Complexity O(N)
