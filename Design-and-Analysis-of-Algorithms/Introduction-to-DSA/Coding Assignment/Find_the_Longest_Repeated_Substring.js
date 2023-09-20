function findLongestRepeatedSubstring(str) {
    // Your code gies here
    let maxLength = 0;
    let result = "";
    // Iterate through all possible substrings of str
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            // Check if the current substring is repeated
            let k = 0;
            while (str[i + k] === str[j + k]) {
                k++;
            }
            // Update maxLength and result if the current substring is longer than the previous ones
            if (k > maxLength) {
                maxLength = k;
                result = str.substring(i, i + maxLength);
            }
        }
    }
    return result;
}
let str = "bananan";
console.log(findLongestRepeatedSubstring(str));