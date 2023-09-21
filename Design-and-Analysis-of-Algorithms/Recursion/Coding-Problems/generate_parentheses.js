// Generate Parentheses
// Easy
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input:
// n = 3

// Output:
// ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input:
// n = 1

// Output:
// ["()"]

// Constraints:
// 1 <= n <= 8


var generateParenthesis = function (n) {
    let res = [];
    findAll("(", n, 1, 0, res);
    return res;
};

function findAll(curr, n, o, c, res) {
    if (curr.length === 2 * n) {
        res.push(curr);
        return;
    }
    if (o < n) {
        findAll(curr + "(", n, o + 1, c, res);
    }
    if (c < o) {
        findAll(curr + ")", n, o, c + 1, res);
    }
}
console.log(generateParenthesis(3));