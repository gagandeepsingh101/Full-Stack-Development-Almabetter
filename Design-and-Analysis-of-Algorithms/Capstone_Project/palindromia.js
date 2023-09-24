// Palindromia

// In the quaint town of Palindromia, there lived a young mathematician named Lily. Lily was known for her love of numbers and her fascination with patterns. One sunny day, Lily discovered an ancient book that spoke of a mystical property called "palindrome." Intrigued, Lily set out on a quest to unlock the secrets of palindromes.
// Guided by the book's wisdom, Lily learned about a remarkable function called isPalindrome, which could reveal whether a number possessed the magical palindrome property. The function takes an argument n, which is the positive integer to be checked. Lily was excited to share this newfound knowledge with her friend, Emma, and together, they embarked on a journey to create the isPalindrome function.
 

// Example 1:
// Input: 12321
// Output: true


// Example 2:
// Input: 1451
// Output: false


// Example 3:
// Input: 12345
// Output: true
 
// Hints
// Consider converting the positive integer to a string and comparing the characters from the beginning and end. If they match, move toward the center. If any mismatch occurs, it is not a palindrome.
// Alternatively, reverse the positive integer and compare it with the original number. If they are equal, it is a palindrome.
// You can also iterate through half of the digits of the positive integer and compare the corresponding digits from the beginning and end. If they are not the same, it is not a palindrome.

// Approach : Rewrite the above given JavaScript code using the 2-pointer approach.


function isPalindrome(n) {
  let nStr = String(n);
  for (let i = 0; i < nStr/2; i++) {
    if (nStr[i]!==nStr[nStr.length-1-i]) {
        return false;
    }
  }
  return true;
}

let num = 1451;
console.log(isPalindrome(num));
