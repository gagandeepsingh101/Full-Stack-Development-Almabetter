// Fair Candy Swap 

// Alice and Bob have a different total number of candies. You've function fairCandySwap. You are given two integer arrays  aliceSizes  and  bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.
// Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.
// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.


// Example 1:
// Input: aliceSizes = [1,1], bobSizes = [2,2]
// Output: [1,2]


// Example 2:
// Input: aliceSizes = [1,2], bobSizes = [2,3]
// Output: [1,2]
 
// Constraints:
// 1 <= aliceSizes.length, bobSizes.length <= 10^4
// 1 <= aliceSizes[i], bobSizes[j] <= 10^5
// Alice and Bob have a different total number of candies.
// There will be at least one valid answer for the given input.
 
// Hints:
// Iterate through Alice's candy boxes, and for each box, iterate through Bob's candy boxes. Calculate the difference in the total number of candies between Alice and Bob.
// Iterate through Alice's candy boxes again, and for each box, check if the difference in the total number of candies can be compensated by swapping a box from Bob's candies.

// Approach : Rewrite the above JavaScript code using Hashmap


var fairCandySwap = function (aliceSizes, bobSizes) {
  // Initialize variables to keep track of the sum of candy sizes
  let sumBob = 0;
  let sumAlice = 0;

  // Create a Map to store Bob's candy sizes for efficient lookup
  let bobSizesMap = new Map();

  // Calculate the sum of candy sizes owned by Bob and populate the Map
  for (let i = 0; i < bobSizes.length; i++) {
    sumBob += bobSizes[i];
    bobSizesMap.set(bobSizes[i], true);
  }

  // Calculate the sum of candy sizes owned by Alice
  for (let i = 0; i < aliceSizes.length; i++) {
    sumAlice += aliceSizes[i];
  }

  // Calculate the target sum, which is half of the combined total
  let sum = (sumAlice + sumBob) / 2;

  // Iterate through Alice's candy sizes
  for (let i = 0; i < aliceSizes.length; i++) {
    let alice = aliceSizes[i];
    // Calculate the required candy size for Bob
    let bob = sum - (sumAlice - alice);

    // Check if Bob's candy sizes Map contains the required size
    if (bobSizesMap.has(bob)) {
      // If found, return the pair of candy sizes that make the swap fair
      return [alice, bob];
    }
  }
};

let aliceSizes = [1, 2],
  bobSizes = [2, 3];

console.log(fairCandySwap(aliceSizes, bobSizes));
