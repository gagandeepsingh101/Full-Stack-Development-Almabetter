function signOfProduct(nums) {
    // Write your code inside this function only.
    let total = 1;
    for (let i = 0; i < nums.length; i++) {
        total *= nums[i];
    }
    if (total === 0) {
        return 0;
    }
    else if (total > 0) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(signOfProduct([2, -3, 5, 4]));
