// Alice and Bob take turns playing a game, with Alice starting first.Initially, there is a number N on the chalkboard. On each players's turn, that player makes a move consisting of:

// Choosing any x with 0 < x < N and N % x == 0.
// Replacing the number N on the chalkboard with N - x.
// Also, if a player cannnot make a move, they lose the game.Return true if and only if Alice wins the game, assuming both players play optimally.

// Example 1:

// Input: N = 2

// Output: true

// Explanation: Alice chooses 1, and Bob has no more moves.

// Example 2:

// Input: N = 3

// Output: false

// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

// Your Task:

// You don't need to read input or print anything. Your task is to complete the function divisorGame() which takes an integer N as parameters and returns true if alice wins the game.

// Expected Time Complexity: O(1)

// Expected Auxiliary Space: O(1)

// **Constraints:**1 ≤ N ≤ 10^3

function divisorGame(N) {
    // // Your code goes here
    // Alice game start karti hai, aur agar N even hai, toh Alice jeet jati hai.
    // Har even number N ke liye, Alice hamesha x=1 choose kar sakti hai, taki N-1 bhi even ho jaye.
    // Aur Bob ko hamesha odd number milna padta hai, kyun ki odd numbers ke sirf odd divisors hote hain.
    // Toh, Bob ka move hamesha odd hoga, aur Alice hamesha even number milega.
    return N%2===0? true :false;
 }