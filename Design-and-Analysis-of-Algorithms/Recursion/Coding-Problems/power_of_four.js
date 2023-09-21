var isPowerOfFour = function (n) {
    // Your code goes here
    if (n === 1) return true;
    if (n === 0 || n % 4 !== 0) return false;
    return isPowerOfFour(n / 4);
};
console.log(isPowerOfFour(24));