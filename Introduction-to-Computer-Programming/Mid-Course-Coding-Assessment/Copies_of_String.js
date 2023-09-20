function string_copies(str, n) {
    // Your code goes here
    let res = "";
    for (let i = 0; i < n; i++) {
        res += str;
    }
    return res;
}
console.log(string_copies("hello",3));