var lengthOfLastWord = function (s) {
    let maxLen = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            if (maxLen > 0) {
                return maxLen;
            }
            continue;
        }
        maxLen++;
    }
    return maxLen;
};
console.log(lengthOfLastWord("fly me to the moon"));