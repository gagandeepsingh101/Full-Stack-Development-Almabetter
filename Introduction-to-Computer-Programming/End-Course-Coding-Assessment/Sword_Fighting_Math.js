function findNumberOfTriangles(arr, n) {
    // Your code goes here

    // first sort array
    arr.sort((a, b) => a - b);
    let ans = 0;

    // iterate over array in reverse order
    for (let i = n - 1; i >= 2; i--) {
        let low = 0;
        let high = i - 1;
        // check if low is less than high or not
        while (low < high) {
            // check if sum of array elements at low and high place is greater array element at ith place
            if (arr[low] + arr[high] > arr[i]) {
                // assign ans (high-low)
                ans += (high - low);
                // decrement high
                high--;
            }
            else {
                // increment low
                low++;
            }
        }
    }
    return ans;
}
console.log(findNumberOfTriangles([6, 4, 9, 7, 8], 5));