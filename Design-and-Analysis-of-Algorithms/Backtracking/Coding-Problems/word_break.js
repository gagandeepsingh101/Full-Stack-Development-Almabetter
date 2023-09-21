// Emily is given a string of characters and a dictionary of valid words. She wants to determine if she can break the string into a sequence of valid words from the dictionary. Write a function to help Emily find out if it's possible to break the given string.

// Example 1:
// Input:
// s = almabetter, wordDict = ["alma", "better"]

// Output:
// true

// Explanation:
// Return true because "almabetter" can be segmented as "alma better".

// Example 2:
// Input:
// s = applepenapple, wordDict = ["apple","pen"]

// Output:
// true

// Explanation:
// Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input:
// s = catsandog, wordDict = ["cats","dog","sand","and","cat"]

// Output:
// false

// Constraints:
// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.


function wordBreak(s, wordDict) {
    // Your code goes here
    const memo = new Map();

    function backtrack(start) {
        if (start === s.length) return true;
        if (memo.has(start)) return memo.get(start);

        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordDict.includes(word) && backtrack(end)) {
                memo.set(start, true);
                return true;
            }
        }

        memo.set(start, false);
        return false;
    }

    return backtrack(0);

}