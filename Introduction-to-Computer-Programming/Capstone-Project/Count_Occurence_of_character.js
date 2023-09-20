function countOccurrences(str, char) {
    // Write your code here
    return str.match(new RegExp(char, 'g')).length;
}
console .log(countOccurrences("hello world", "l"));