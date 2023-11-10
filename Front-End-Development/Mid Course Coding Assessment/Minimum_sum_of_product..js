// You are given two arrays, A and B, of equal size N. The task is to find the minimum value of A[0] * B[0] + A[1] * B[1] + .... + A[N-1] * B[N-1], where shuffling of elements of arrays A and B is allowed.

// Example 1:


// Input:
// N = 3
// A[] = {3, 1, 1}
// B[] = {6, 5, 4}
// Output:
// 23
// Explanation:1*6+1*5+3*4 = 6+5+12
// = 23 is the minimum sum
// Example 2:


// Input:
// N = 5
// A[] = {6, 1, 9, 5, 4}
// B[] = {3, 4, 8, 2, 4}
// Output:
// 80
// Explanation:
// 2*9+3*6+4*5+4*4+8*1
// =18+18+20+16+8
// = 80 is the minimum sum
// Your Task:

// You don't need to read input or print anything. Your task is to complete the function minValue() which takes the arrays A[], B[] and its size N as inputs and returns the minimum sum.

// **Expected Time Complexity:**O(N. log(N))

// **Expected Auxiliary Space:**O(1)

// Constraints:

// 1 ≤ N ≤ 10^5

// 1 ≤ A[] ≤ 10^5



function minValue(A, B, N) {
    // Arrays A aur B ko ascending order mein sort karo.
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>a-b);

    // Ek variable initialize karo jo total product sum ko store karega.
    let out = 0;

    // Arrays par loop chalake N baar iterate karo.
    for (let i = 0; i < N; i++) {
        // A[i] aur B[N-i-1] ka product calculate karo aur usko total sum me add karo.
        out += A[i] * B[N - i - 1];
    }

    // Total product sum ko result ke roop mein return karo.
    return out;
}
let N = 3;
let A  = new Array(3, 1, 1);
let B = new Array(6, 5, 4);

console.log(minValue(A,B,N));