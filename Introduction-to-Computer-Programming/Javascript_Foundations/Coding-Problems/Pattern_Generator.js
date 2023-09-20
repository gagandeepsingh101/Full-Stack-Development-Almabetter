function generatePattern(num) {
    // Your code goes here.
    let pattern = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += "@"
            if (j === i) {
                pattern += "\n";
            }
        }
    }
    return pattern;
}
console.log(generatePattern(5));