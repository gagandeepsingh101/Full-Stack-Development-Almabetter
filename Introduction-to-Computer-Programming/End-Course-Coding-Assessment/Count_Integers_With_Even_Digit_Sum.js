var countEven = function (num) {
    // Your code goes here
    let count = 0
    for (let i = 2; i <= num; i++) {
        if (sumEven(i) % 2 === 0) {
            count++;
        }
    }
    return count;
};
function sumEven(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(countEven(30));