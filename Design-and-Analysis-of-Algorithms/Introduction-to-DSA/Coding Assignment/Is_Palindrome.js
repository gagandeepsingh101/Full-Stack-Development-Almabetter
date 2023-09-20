function isPalindrome(str) {

    // replace the not alpha-numeric characters with empty string and then convert it lowercase
    str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();

    // first split the string and then reverse the string and join with empty spaces then compare with str that both are equal or not 
    return str.split("").reverse().join("") === str;
}
let str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str));