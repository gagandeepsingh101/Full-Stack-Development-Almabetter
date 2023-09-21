# Working of Radix Sort

Unsorted List: [170, 45, 75, 90, 802, 24, 2, 66]

1. (Least Significant Digit - LSD):

    Initialize 10 buckets (0 to 9) to temporarily store the numbers.

    Sort the numbers into the buckets based on the least significant digit (rightmost digit) from 0 to 9.

    Concatenate the buckets in order back into a single list.

    Repeat this process for the next significant digit (tens place).

    Continue this process for all digits until you have sorted the numbers completely.

Pass 1 (LSD - Sorting by units place):
- Bucket 0: [170, 90]
- Bucket 1: [801]
- Bucket 2: [2]
- Bucket 3: [23]
- Bucket 4: [24]
- Bucket 5: [45, 75]
- Bucket 6: [66]
- Bucket 7: []
- Bucket 8: [802]
- Bucket 9: []

Concatenate the buckets in order: [170, 90, 801, 2, 23, 24, 45, 75, 66, 802]

Pass 2 (Sorting by tens place):

- Bucket 0: [802, 2]
- Bucket 1: []
- Bucket 2: [23, 24]
- Bucket 3: []
- Bucket 4: [45]
- Bucket 5: [75]
- Bucket 6: [66]
- Bucket 7: [170, 90]
- Bucket 8: [801]
- Bucket 9: []

Concatenate the buckets in order: [802, 2, 23, 24, 45, 75, 66, 170, 90, 801]

Pass 3 (Sorting by hundreds place - Most Significant Digit):

- Bucket 0: [2, 23, 24, 45, 66, 90]
- Bucket 1: [170]
- Bucket 2: []
- Bucket 3: []
- Bucket 4: []
- Bucket 5: [801]
- Bucket 6: []
- Bucket 7: []
- Bucket 8: []
- Bucket 9: [802]

Concatenate the buckets in order: [2, 23, 24, 45, 66, 90, 170, 801, 802]

The list is now sorted. This process effectively sorts the numbers by considering their digits from right to left, resulting in a fully sorted list.

