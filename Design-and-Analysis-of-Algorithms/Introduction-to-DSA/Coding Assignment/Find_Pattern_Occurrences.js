function findPatternOccurrences(str, pattern) {

    let occurance = [];
    // first check for first indexOf pattern in str
    let i = str.indexOf(pattern);

    // check until i is not equal to -1
    while (i !== -1) {

        // add i in occurance
        occurance.push(i);

        // then check other occurrence pattern in str after i+1 index
        i = str.indexOf(pattern, i + 1);
    }
    return occurance;
}
let str = "abababa";
let pattern = "aba";

console.log(findPatternOccurrences(str, pattern));
