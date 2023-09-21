# Working of Counting Sort
Sorting the array [4, 2, 2, 8, 3, 3, 1] using Counting Sort.

####  Step 1: Find the range of input values.
- Minimum value in the array: 1
- Maximum value in the array: 8
- Range of values: 8 - 1 + 1 = 8

#### Step 2: Create a counting array and initialize it.
- Create a counting array with 8 elements, initialized to 
zeros: [0, 0, 0, 0, 0, 0, 0, 0]

#### Step 3: Count the occurrences.
- Iterate through the input array and count the occurrences of each value in the counting array.
- Updated counting array: [1, 2, 2, 2, 0, 0, 0, 1]

#### Step 4: Accumulate counts.
- Update the counting array by accumulating the counts.
Updated counting array: [1, 3, 5, 7, 7, 7, 7, 8]

#### Step 5: Create the sorted output array.
- Create an output array of the same size as the input array: [0, 0, 0, 0, 0, 0, 0, 0]

#### Step 6: Place elements in the sorted order.
- Start iterating through the input array in reverse order.
- Take the last element, which is 1, and find its position in the counting array. Since there's one occurrence of 1, it goes to index 0 in the output array, and we decrement the count in the counting array: [0, 3, 5, 7, 7, 7, 7, 8]
- Next, take the last element 3, and it goes to index 5 in the output array, and we decrement the count in the counting array: [0, 3, 5, 7, 7, 6, 7, 8]
- Continue this process for all elements.

After placing all elements into the output array, you get the sorted array:

#### Step 7: Final sorted array.

- Sorted array: [1, 2, 2, 3, 3, 4, 8]

So, the original array [4, 2, 2, 8, 3, 3, 1] is sorted in ascending order using Counting Sort, and the result is [1, 2, 2, 3, 3, 4, 8].






