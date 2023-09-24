// Remove Duplicate Letters

// Imagine you are tasked with managing student ID characters in a classroom. You have a list of ID characters, but unfortunately, due to a technical glitch, some students ended up with duplicate IDs. To address this issue, you decide to create a function called duplicateCheck that takes a string str of ID characters as an argument. The function's purpose is to remove duplicate ID characters while preserving the original order. Your goal is to ensure that each student has a unique ID.
// How would you approach using the duplicateCheck function to solve this task?

// Example 1:
// Input:S = "zvvo"
// Output:"zvo"
// Explanation:Only keep the first occurrence

// Example 2:
// Input:S = "gfg"
// Output:gf
// Explanation:Only keep the first occurrence

// Constraints:
// 1 <= |S| <= 10^5
// str contains lowercase English alphabet

// Traditional Approach

class Solution {
  duplicateCheck(str) {
    //code here
    let temp = "" + str[0];
    for (let i = 0; i < str.length; i++) {
      if (temp.indexOf(str[i]) == -1) {
        temp = temp + str[i];
      }
    }
    return temp;
  }
}

// Optimized Approach

class Solution {
  duplicateCheck(str) {
    const p = new Set(str);
    const t = [...p];
    return t.join("");
  }
}

// Provide your comparison here.

// Traditional approach

// 1. Time Complexity : O(N) because it iterate over string to remove duplicates characters from the string and return the new unique string string

// 2. Space Complexity : O(1) because its constant space to store the unique characters from the string

// 3. In these approach we simply check through iterate over string to find that character in new unique string in which result store is found or not if found skip otherwise concat the character with result . After iteration the result is returned

// 4. It is not suitable for large size input strings due it check used indexof and neseted loop

// Optimized approach

// 1. Time Complexity : O(1) because its simply use set which store only unique character from string which

// 2. Space Complexity : O(N) because its used set data structure to character of string in it

// 3. In these approach we used a stack data structure because its fuctionality that its store only uniquesr values and skip duplicates values. So that its simply store uniques characters from string and then return back after converting it into string using array

// 4. It is suitable for large size input strings due it avoids manaual checking
