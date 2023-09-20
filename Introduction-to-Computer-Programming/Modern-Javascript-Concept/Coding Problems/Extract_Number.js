function extractNumbers(str) {
    return str.match(/\d+(\.\d+)?/g).map(Number);
}
console.log(extractNumbers("$353.34")); 