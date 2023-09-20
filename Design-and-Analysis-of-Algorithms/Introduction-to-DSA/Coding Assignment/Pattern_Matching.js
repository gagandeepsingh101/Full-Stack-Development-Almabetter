function patternMatching(str, pattern) {
    let reg = new RegExp(pattern, "gi");
    return reg.test(str);
}
let str = "abcdefg";
let pattern = "cde";
console.log(patternMatching(str, pattern));