# Summary of Sorting Algorithms

- Bubble Sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order until the list is sorted.

- The time complexity of bubble sort is O(n^2) and space complexity is O(1).

- Selection sort is a simple sorting algorithm that works by selecting the smallest element and swapping it with the first element of the unsorted array.

- The time complexity of selection sort is O(n^2), which makes it inefficient for large data sets.

- Selection sort is stable and adaptable to various data types. It is also an in-place sorting algorithm, which means it has O(1) space complexity.

- Insertion Sort is a simple sorting algorithm that works by repeatedly inserting an element from an unsorted list into its correct position in a sorted list.

- It maintains two subarrays in a given array: Sorted Subarray and Unsorted Subarray.

- The time complexity of Insertion sort is O(n^2) in average and worst cases, and O(n) in the best case, while its space complexity is O(1).

- Merge sort is a divide-and-conquer algorithm that recursively divides an array into halves until it reaches atomic values, sorts each half, and then merges them back together.

- The algorithm has a time complexity of O(n log n) and a space complexity of O(n).
- Quick Sort is a sorting algorithm that uses a divide-and-conquer approach to sort an array of elements.
- Quick Sort has an average time complexity of O(n log n), making it a relatively fast sorting algorithm for large data sets. The worst-case time complexity of quick sort is O(n^2).


- Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.

- Heap Sort has a time complexity of O(n log n) in all cases, making it efficient for large datasets. Heap Sort operates directly on the input array, resulting in a space complexity of O(1).

- Bucket Sort is a non-comparative sorting algorithm that divides the input into a fixed number of buckets. It distributes the elements into the buckets based on their values and applies another sorting algorithm within each bucket.

- Bucket Sort is useful when the input is uniformly distributed over a range.

- It has an average-case time complexity of O(n + k), where n is the number of elements and k is the number of buckets used. The space complexity of Bucket Sort is O(n + k), depending on the number of elements and the number of buckets.

- Radix Sort is a non-comparative sorting algorithm that sorts elements based on their digits or bits from the least significant to the most significant. It works by repeatedly sorting the elements based on each digit or bit position.

- Radix Sort has a time complexity of O(d * (n + k)), where d is the number of digits or bits, n is the number of elements, and k is the range of values for each digit or bit.

- The space complexity of Radix Sort is O(n + k), depending on the number of elements and the range of values.

- Counting Sort is a non-comparative sorting algorithm that determines the frequency of each distinct element in the input array. It creates a count array to store the occurrence of each element and uses this information to place elements in the correct order.

- Counting Sort has a time complexity of O(n + k), where n is the number of elements and k is the range of values.

- The space complexity of Counting Sort is O(n + k), depending on the number of elements and the range of values.
