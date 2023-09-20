function isPalindrome(str) {
    // Write your code here
    str = str.toLowerCase();
    const cleanedStr = str.match(/[a-z0-9]/gi);
    const reversedStr = cleanedStr.reverse().join('');
    return reversedStr === str;
}
console.log(isPalindrome("Radar"));