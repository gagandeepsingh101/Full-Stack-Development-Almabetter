const isPowerOfThree = function (n) {
  // Your code goes here
  if (n === 1) return true;
  if (n === 0 || n % 3 !== 0) return false;
  return isPowerOfThree(n / 3);
};
console.log(isPowerOfThree(9));