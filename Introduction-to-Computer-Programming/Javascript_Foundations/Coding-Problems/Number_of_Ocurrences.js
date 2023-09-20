function countOccurrences(numbers, target) {
    // Your code goes here
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (target === numbers[i]) {
            count++;
        }
    }
    return count;
} 
console.log(countOccurrences([1,1,2,5,3,2,3,4,4,6,7,3,4,5,],3));