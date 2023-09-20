function shortestDistance(wordsDict, word1, word2) {
    // Write your code inside this function only.
    let word1pos = 0;
    let word2pos = 0;
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] == word1) {
            word1pos = i;
        }
        if (wordsDict[i] == word2) {
            word2pos = i;
        }
    }
    return Math.abs(word1pos - word2pos);
}
const wordsDict = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
console.log(shortestDistance(wordsDict, "apple", "fig"));