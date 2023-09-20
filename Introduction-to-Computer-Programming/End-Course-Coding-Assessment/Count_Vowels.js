function countVowels(str) {
    // Your code goes here
    return (str.match(/[aieou]/g)||[]).length;
}
console.log(countVowels("Hello world!")); 