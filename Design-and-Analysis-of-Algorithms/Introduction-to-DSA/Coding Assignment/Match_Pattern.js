function matchPattern(pattern, input) {

    // check if the length of the pattern is not equal to the length of the input
    if (pattern.length !== input.length) {
        return false;
    }
    // create a new empty map
    let patternMap = new Map();

    // traverse through the pattern
    for (var i = 0; i < pattern.length; i++) {

        // if paternMap is not initalized the pattern at i index then and pattern with input of i'th index
        if (!patternMap.has(pattern[i])) {
            patternMap.set(pattern[i], input[i]);
        }
        else {

            // if patternMap include patern[i] then check if its value matches the input value at i'th index 
            if (patternMap.get(pattern[i]) !== input[i]) {
                return false;
            }
        }
    }
    return true;
}

let pattern = "xyyx";
let input = "abba";
console.log(matchPattern(pattern, input));