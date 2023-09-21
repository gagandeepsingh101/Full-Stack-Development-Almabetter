// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:


// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:


// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:


// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.



var backspaceCompare = function (s, t) {
    // Your code goes here
    let resS = []
    let resT = [];

    for (let v of s.split("")) {
        if (v === "#") {
            resS.pop();
        }
        else {
            resS.push(v);
        }
    }
    for (let v of t.split("")) {
        if (v === "#") {
            resT.pop();
        }
        else {
            resT.push(v);
        }
    }

    return resS.join("") === resT.join("");
};

let s = "ab#c", t = "ad#c";

console.log(backspaceCompare(s, t));
