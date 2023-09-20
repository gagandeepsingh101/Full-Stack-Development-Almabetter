function first_half(str) {
    // Your code goes here
    if (str.length % 2 === 0) {
        return str.substr(0, str.length / 2);
    }
    return str;
}
console.log(first_half("helloo"));