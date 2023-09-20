function isPalindrome(str) {

    // first it replaces all characters which not match with a to z and A to Z in the string with empty space
    const cleanedStr = str.replace(/[^a-zA-Z]/g, "")

    // after that converts all characters in the string to lowercase
    .toLowerCase();

    // it splits the string all character into array
    const reversedStr = cleanedStr.split("")

    // and then reverse the array after that join all characters together to get a string
    .reverse().join("");

    // at place we compare the string which is not included any special characters and numbers in string with its reverse version of strings
    return cleanedStr === reversedStr;
}

// console.log(isPalindrome("Hey Google! Call to Mom")); // Output : false
console.log(isPalindrome("Madam In Eden, I'm Adam")); // Output : true