function reverseWords(sentence) {
    // first split string into string array from space
    return sentence.split(" ")

    //and then reverse string array and return string array to string array item with single space 
    .reverse().join(" ");
}
console.log(reverseWords("Hey Siri! What ups?"));