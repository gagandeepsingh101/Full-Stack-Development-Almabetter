function getUniqueNumbers(numbers) {
    var numbersSet = new Set();
    for (var i = 0; i < numbers.length; i++) {
        numbersSet.add(numbers[i]);
    }
    return Array.from(numbersSet);
}
console.log(getUniqueNumbers([1, 2, 3, 2, 4, 4, 5]));