// A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

// For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
// Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

// A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

// Example 1:
// Input:
// 1

// Output:
// 5

// Explanation:
// The good numbers of length 1 are "0", "2", "4", "6", "8".

// Example 2:
// Input:
// 4

// Output:
// 400

// Example 3:
// Input:
// 50

// Output:
// 564908303

// Constraints:
// 1 <= n <= 10^15




const MOD = BigInt(1000000007)
var countGoodNumbers = function(n) {
    const a = power(BigInt(5), parseInt(n/2));
    const b = power(BigInt(4), parseInt(n/2));
    if(n%2 == 0) {
        return (a*b)%MOD;
    } else {
        return (BigInt(5)*a*b)%MOD;
    }
    
};

var power = function(x, n) {
    if(n == 0) {
        return BigInt(1);
    }

    if(n == 1) {
        return x;
    }

    const temp = power(x,parseInt(n/2))%MOD;
    if(n%2 == 0) {
        return temp*temp;
    } else {
        return x*temp*temp;
    }
}