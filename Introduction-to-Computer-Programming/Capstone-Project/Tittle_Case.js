function titleCase(sentence) {
    // write your code here
    return sentence.split(' ').map(word=> word.charAt(0).toUpperCase()+word.substr(1)).join(' ');
}
console.log(titleCase("Dream big, work hard, and stay focused"));
