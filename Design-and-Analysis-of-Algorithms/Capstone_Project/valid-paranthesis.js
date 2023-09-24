// Minimum Moves for Valid Parentheses

// Lucy is a mathematics enthusiast who enjoys tackling intriguing problems. Recently, she encountered a fascinating challenge involving parentheses strings. The task at hand is to create a function called minAddToMakeValid that takes an argument s, representing a string of parentheses, and determines the minimum number of additions required to transform the given string into a valid parentheses string.
// A valid string adheres to the following three conditions:
// It can be an empty string.
// It can be expressed as a concatenation of two valid strings.
// It can be represented as a valid string enclosed within parentheses.
// Lucy is excited about this problem and is eager to come up with a solution. Can you assist Lucy in solving this puzzle?

// Example 1:
// Input: s = "(()"
// Output: 1
// Explanation: To make the string "(()" valid, Lucy can add a closing parenthesis at the end, resulting in "(())"

// Example 2:
// Input: s = "())"
// Output: 3
// Explanation: Lucy needs to add an opening parenthesis at the beginning,
// an opening parenthesis before the second closing parenthesis, and a closing parenthesis at the end.
// This transforms the input string "())" into the valid string "(())"

// Example 3:
// Input: s = "()))(("
// Output: 4
// Explanation: In order to make the string "()))((" valid, Lucy can add an opening parenthesis at the beginning,
// a closing parenthesis after the first two opening parentheses,
// an opening parenthesis before the last two closing parentheses,
// and a closing parenthesis at the end. This results in the valid string "((()))"

// Constraints:
// 1 <= s.length <= 1000
// s[i] is either '(' or ')'.

// Hints:
// Using a stack can be helpful in tracking the opening parentheses encountered and matching them with the closing parentheses.
// Take a closer look at the conditions that define a valid string. Understanding these conditions can guide you in determining the minimum number of moves required to make the string valid.
// Pay attention to the relationship between opening and closing parentheses. How do they affect the validity of the string?

var minAddToMakeValid = function (s) {
  let openCount = 0;
  let moves = 0;
  for (let char of s) {
    if (char === "(") {
      openCount++;
    } else if (char === ")" && openCount > 0) {
      openCount--;
    } else {
      moves++;
    }
  }
  moves += openCount;
  return moves;
};

const inputStr = "())";
console.log(minAddToMakeValid(inputStr));
