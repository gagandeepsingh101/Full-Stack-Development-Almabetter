//Working of Heap Sort 

// Build the Heap: The first step in Heap Sort is to build a heap from the input array. This involves arranging the elements of the array into a binary heap structure. The heap can be built in linear time using a bottom-up approach starting from the last non-leaf node and sifting down each node to its correct position.

// Extract the Maximum Element: Once the heap is built, the maximum element is located at the root of the heap. It is swapped with the last element in the unsorted region of the array. This effectively places the maximum element in its correct sorted position at the end of the array.

// Restore Heap Property: After swapping the maximum element, the heap property may be violated. To restore the heap property, sift down the new root (previously the last element of the unsorted region) to its correct position in the heap.

// Repeat the Process: Repeat steps 2 and 3 until the entire array is sorted. In each iteration, the sorted region of the array expands by one element, and the unsorted region decreases by one element.

// Final Sorted Array: After all iterations, the array will be completely sorted in ascending order.

function heapSort(arr) {
    let length = arr.length;
  
    // Build the heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
      heapify(arr, length, i);
    }
  
    // Extract elements one by one from the heap
    for (let i = length - 1; i > 0; i--) {
      // Swap the root (maximum element) with the last element
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
  
      // Restore heap property for the remaining heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  function heapify(arr, length, rootIndex) {
    let largest = rootIndex;
    let left = 2 * rootIndex + 1;
    let right = 2 * rootIndex + 2;
  
    // Compare the root with the left child
    if (left < length && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // Compare the largest with the right child
    if (right < length && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If the largest element is not the root, swap them and heapify the affected subtree
    if (largest !== rootIndex) {
      let temp = arr[rootIndex];
      arr[rootIndex] = arr[largest];
      arr[largest] = temp;
  
      // Recursively heapify the affected subtree
      heapify(arr, length, largest);
    }
  }
  
  // Example usage
  var arr = [6, 2, 5, 3, 9];
  console.log(heapSort(arr));
  
