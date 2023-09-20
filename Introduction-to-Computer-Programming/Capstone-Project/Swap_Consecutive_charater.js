function swapConsecutiveCharacters(str) {
    // Write your code inside this function only.
    let res = str.split("");
    for (let i = 0; i < res.length; i = i + 2) {
        [res[i], res[i + 1]] = [res[i + 1], res[i]]
    }
    return res.join('');
}
console.log(swapConsecutiveCharacters("abcde"));
