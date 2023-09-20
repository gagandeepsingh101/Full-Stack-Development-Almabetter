function findMaxNumber(numbers) {
    // Your code goes here
    var max=numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (max <numbers[i]) {
            max =numbers[i];
        }
    }
    return max;
}
console.log(findMaxNumber([12,34,56,34,67,45,89,101,87]));