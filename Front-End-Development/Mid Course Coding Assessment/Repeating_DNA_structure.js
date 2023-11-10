// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

// Example 1:
// Input:
// s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

// Output:
// ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
// Input:
// s = "AAAAAAAAAAAAA"

// Output:
// ["AAAAAAAAAA"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is either 'A', 'C', 'G', or 'T'

var findRepeatedDnaSequences = function(s) {
    // Your code goes here
    if (s.length < 10) {
          return []; // Agar string choti hai, toh koi repeated sequence nahi hoga.
      }
  
      const sequences = {}; // Ek object banate hain sequences ko store karne ke liye
      const result = new Set(); // Set banate hain unique repeated sequences ko store karne ke liye
  
      for (let i = 0; i <= s.length - 10; i++) {
          const sequence = s.slice(i, i + 10); // Har 10-letter sequence ko extract karte hain
          if (sequences[sequence]) {
              sequences[sequence]++; // Sequence mil gaya, uski count badhao
              if (sequences[sequence] === 2) {
                  result.add(sequence); // Agar sequence do baar mila, toh use result mein add karo
              }
          } else {
              sequences[sequence] = 1; // Naya sequence milega, toh use dictionary mein add karo
          }
      }
  
      return Array.from(result); // Set ko array mein convert karke unique repeated sequences return karo
  
  };
  let res = findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT");
console.log(res);
