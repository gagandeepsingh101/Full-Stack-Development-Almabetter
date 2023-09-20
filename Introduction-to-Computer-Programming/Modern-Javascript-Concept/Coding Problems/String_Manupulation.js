let str="Hello World";

const removeVowelsES6 = (str) => {
    // Your code goes here
    return str.replace(/[aeiou]/gi, '');
};

console.log(removeVowelsES6(str));