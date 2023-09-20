function pushZerosToEnd(arr) {
    // Your code goes here
    let pos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[pos] = arr[i];
            pos++;
        }
    }
    for (let i = pos; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
console.log(pushZerosToEnd([1,0,3,0,2,0,4,5,6,0,7,8,0,9]));