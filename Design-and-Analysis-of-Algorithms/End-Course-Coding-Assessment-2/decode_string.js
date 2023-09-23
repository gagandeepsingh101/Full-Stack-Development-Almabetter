// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:
// Input:
// "3[a]2[bc]"

// Output:
// aaabcbc

// Example 2:
// Input:
// "3[a2[c]]"

// Output:
// accaccacc

// Constraints:
// - `1 <= s.length <= 30`
// - `s` consists of lowercase English letters, digits, and square brackets `'[]'`.
// - `s` is guaranteed to be **a valid** input.
// - All the integers in `s` are in the range `[1, 300]`.


var decodeString = function (s) {
    const stack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push({ str: currentStr, num: currentNum });
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            const { str, num } = stack.pop();
            currentStr = str + currentStr.repeat(num);
        } else {
            currentStr += char;
        }
    }
    return currentStr;
}
console.log(decodeString("3[ab]2[4[bc]]"));