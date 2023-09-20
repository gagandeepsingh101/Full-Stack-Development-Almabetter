function rotateArray(arr, k) {
    // find the rotation according to length of array
    k = k % arr.length;

    // if rotation is zero then return the array
    if (k === 0) {
        return arr;
    }

    // add the array elements from the going last position to the rotation position
    const firstPart = arr.slice(-k);
    // add the array elements from the going first position to the rotation position in array
    const secondPart = arr.slice(0, arr.length - k);

    // merge secondPart in firstPart
    return firstPart.concat(secondPart);
}
console.log(rotateArray([1,2,3,4,5,6,7,8],4));