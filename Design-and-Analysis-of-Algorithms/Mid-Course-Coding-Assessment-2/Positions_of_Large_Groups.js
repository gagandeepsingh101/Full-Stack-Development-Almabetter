// In a string s of lowercase letters, these letters form consecutive groups of the same character.

// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

// A group is considered large if it has 3 or more characters.

// Return the intervals of every large group sorted in increasing order by start index.

// Example 1:


// Input: s = "abbxxxxzzy"
// Output: [[3,6]]
// Explanation:"xxxx" is the onlylarge group with start index 3 and end index 6.
// Example 2:


// Input: s = "abc"
// Output: []
// Explanation: We have groups "a", "b", and "c", none of which are large groups.
// Example 3:


// Input: s = "abcdddeeeeaabbbcd"
// Output: [[3,5],[6,9],[12,14]]
// Explanation: The large groups are "ddd", "eeee", and "bbb".
// Constraints:

// 1 <= s.length <= 1000
// s contains lowercase English letters only.


var largeGroupPositions = function (s) {
    // Your code goes here
    let start = 0;
    let count = 0;
    let res = [];

    // iterate over s sting
    for (let i = 1; i < s.length; i++) {

        // if previous character is equal to current character then increment count
        if (s[i - 1] === s[i]) {
            count++;
        }
        else {
            // count exceed or equal to 3
            if (count >= 3) {

                // push the length curr repeating character in string
                res.push([start, i - 1]);
            }
            // intialize start position with i and count with 1
            start = i;
            count = 1;
        }
    }
    // check for length of repeating character in string for large group positions
    if (count >= 3) {
        res.push([start, s.length - 1])
    }
    return res;

};
let s = "abcdddeeeeaabbbcd"
console.log(largeGroupPositions(s));