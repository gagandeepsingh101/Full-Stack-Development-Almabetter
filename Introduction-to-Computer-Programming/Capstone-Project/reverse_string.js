function reverseString(str) {
    // Write your code inside this function only.
    let res = str.split("");
    let len = str.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        [res[i], res[len - i - 1]] = [res[len - i - 1], res[i]];
    }
    return res.join("");
}
console.log(reverseString("AlmaBetter University"));
