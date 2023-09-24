// Find the Smallest Letter Greater Than the Target 

// In a quaint village nestled amidst towering mountains, lived a young adventurer named Alex. Known for their courage and curiosity, Alex had embarked on a journey to uncover the secrets hidden within an ancient artifact. Legend had it that the artifact contained a mystical array of characters, each possessing a unique power.
// Guided by an old map, Alex discovered the artifact deep within a hidden cave. As they cautiously approached, the array of characters illuminated in a soft glow, revealing its non-decreasing order. The ancient text whispered tales of enchantment, promising a secret if Alex could use the nextGreatestLetter function with the arguments (letters, target) to find the character that was lexicographically greater than their given target.
// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.


// Example 1:
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.


// Example 2:
// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.


// Example 3:
// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z',
// so we return letters[0].
 
// Constraints:
// 2 <= letters.length <= 10^4
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

// Approach : Rewrite the above given JavaScript code using Set 


function nextGreatestLetter(letters, target) {
  let set = new Set(letters);
  for (let charCode = target.charCodeAt(0) + 1; ; charCode++) {
    let nextLetter = String.fromCharCode(charCode);
    if (set.has(nextLetter)) {
      return nextLetter;
    }
    if (nextLetter === "z") {
      charCode = "a" - 1;
    }
  }
}

let letters = ["c", "f", "j"],
  target = "f";
console.log(nextGreatestLetter(letters, target));
