function findLongestWord(sentence) {
    // Write your code here
    let count = 0;
    sentence = sentence.split(' ');
    for (word of sentence) {
        count = count > word.length ? count : word.length;
    }
    return count;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
