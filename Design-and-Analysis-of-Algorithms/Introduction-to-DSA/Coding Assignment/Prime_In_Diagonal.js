var diagonalPrime = function (nums) {

    // this check if number is prime number or not
    function isPrime(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= (num ** 0.5); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    let n = nums.length;
    let largestPrime = 0;

    // here we check for diagonal element present at i'th row and i'th column
    for (let i = 0; i < n; i++) {
        if (isPrime(nums[i][i]) && nums[i][i] > largestPrime) {
            largestPrime = nums[i][i];
        }
    }

    // here we check for diagonal element present at i'th row and (n-1-i)'th column
    for (let i = 0; i < n; i++) {
        if (isPrime(nums[i][n - 1 - i]) && nums[i][n - 1 - i] > largestPrime) {
            largestPrime = nums[i][n - 1 - i];
        }
    }
    return largestPrime;
}

let nums = [[1, 2, 3], [5, 6, 7], [9, 10, 11]];
console.log(diagonalPrime(nums));
