// You are given a positive integer p. Consider an array nums (1-indexed) that consists of the integers in the inclusive range [1, 2p - 1] in their binary representations. You are allowed to do the following operation any number of times:

// Choose two elements x and y from nums.
// Choose a bit in x and swap it with its corresponding bit in y. Corresponding bit refers to the bit that is in the same position in the other integer.
// For example, if x = 1101 and y = 0011, after swapping the 2nd bit from the right, we have x = 1111 and y = 0001.

// Find the minimum non-zero product of nums after performing the above operation any number of times. Return this product modulo 109 + 7.

// Note: The answer should be the minimum product before the modulo operation is done.

// Example 1:
// Input:
// 1

// Output:
// 1

// Example 2:
// Input:
// 2

// Output:
// 6

// Example 3:
// Input:
// 3

// Output:
// 1512



var minNonZeroProduct = function(p) {
    // Your code goes here
    let r=BigInt(1)
   p=BigInt(p)
   r=(2n**p)-2n
    let mod=BigInt(1000000007)
    function rec(n,r){
        if(n==0n)return 1n
        if(n==1n)return r%mod
        if(n%2n!=0n){
            const temp=rec((n-1n)/2n,r)
            return (r*(temp*temp)%mod)%mod
        }
        else{
            const temp=rec(n/2n,r)%mod
             return (temp*temp)%mod
        }
    }
    return (rec(r/2n,r)*(r+1n))%mod
    
};