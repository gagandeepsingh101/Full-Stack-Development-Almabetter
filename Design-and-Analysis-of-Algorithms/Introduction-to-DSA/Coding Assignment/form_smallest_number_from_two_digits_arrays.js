var minNumber = function (nums1, nums2) {
    let both = [];
    
    // here we traverse in num1 and check if it present in num2 or not.
    // If is present in it then add into both array
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            both.push(nums1[i]);
        }
    }

    // check if both lengths are greater than zero then return minimum value from both array
    if (both.length > 0) {
        return Math.min(...both);
    }
    
    // if both lengths is zero then find minimum value from num1 and num2 
    let minNums1 = Math.min(...nums1);
    let minNums2 = Math.min(...nums2);

    // if num1 minimum value is less than num2 minimum value concat num1(minimum value) and num2(minimum value)
    // otherwise concat num2(minimum value) and num1(minimum value)
    return minNums1 < minNums2 ? minNums1 + "" + minNums2 : minNums2 + "" + minNums1;
};
let nums1 = [4, 1, 3];
let nums2 = [5, 7];
console.log(minNumber(nums1, nums2));