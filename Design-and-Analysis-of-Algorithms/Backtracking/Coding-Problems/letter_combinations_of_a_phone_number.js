// Michael found an old cell phone that only has numbers associated with letters. He wants to generate all possible letter combinations that can be formed by dialing a given sequence of digits. Write a function to help Michael find these combinations.



// Example 1:
// Input:
// digits = "23"

// Output:
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input:
// digits = ""

// Output:
// []

// Example 3:
// Input:
// digits = "2"

// Output:
// ["a","b","c"]

// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].


var letterCombinations = function (digits) {
    if (!digits) return [];
    let digLetMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    let res = [];
    let findAll = function (curr, i) {
        if (i === digits.length) {
            res.push(curr);
            return;
        }
        let letters = digLetMap[digits[i]]
        for (let letter of letters) {
            findAll(curr+letter, i + 1);
        }
    }
    findAll("", 0);
    return res;
};