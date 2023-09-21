# Working of  Bucket Sort


[23, 45, 12, 57, 32, 19, 65, 78, 54, 36]
Here are the steps to perform bucket sort:

1. Find the Range: Determine the range of values in the list. In this case, the minimum value is 12, and the maximum value is 78.

2. Create Buckets: Create empty buckets for each range of values ((78+12)/5=19). For simplicity, let's create five buckets representing the ranges 0-19, 20-39, 40-59, 60-79, and 80-99.
    - Bucket 1: []
    - Bucket 2: []
    - Bucket 3: []
    - Bucket 4: []
    - Bucket 5: []

3. Place Items in Buckets: Go through each number in the original list and put it in the appropriate bucket based on its range.
    - Bucket 1: [12, 19]
    - Bucket 2: [23, 32, 36]
    - Bucket 3: [45, 54, 57]
    - Bucket 4: [65, 78]
    - Bucket 5: []

4. Sort Each Bucket: Sort each bucket individually. We can use a simple sorting algorithm like insertion sort for this step. After sorting, the buckets look like this:
    - Bucket 1: [12, 19]
    - Bucket 2: [23, 32, 36]    
    - Bucket 3: [45, 54, 57]
    - Bucket 4: [65, 78]
    - Bucket 5: []

5. Concatenate Buckets: Combine all the buckets in order, starting with Bucket 1 and ending with Bucket 5:

    Sorted List: [12, 19, 23, 32, 36, 45, 54, 57, 65, 78]

Now, you have a sorted list of numbers using the bucket sort algorithm. Bucket sort is particularly useful when you have a relatively small range of values and a large number of items to sort, as it can reduce the time complexity compared to traditional comparison-based sorting algorithms.






