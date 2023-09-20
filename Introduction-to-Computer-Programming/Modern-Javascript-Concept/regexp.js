// Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern.

let string = " Recently Hi India celebrated Hi its Independence Day 15 August 1947"

// If we want to know whether a string starts with a particular word or not, 
// we can use ^ symbol in the beginning of the word to check it.
// false if not found

let pattern1 = /^H/g
// here g means global it is used to find all the matches
// ^ is the symbol for 'start of the string'
// by default the matches are case sensitive
// this means that it will be differentiate between 'H' 
// and 'h'

// test method returns true if the pattern is 
// found in the string
// false if not found
console.log(pattern1.test(string)) // true
console.log(string.match(pattern1)) //

let pattern2 = /^h/gi
// i is the symbol for 'case insensitive'
// even though the string starts with 'H' and not 'h'
// the pattern will still match
console.log(pattern2.test(string)) // true
console.log(string.match(pattern2)) //

// $ is the symbol for 'end of the string'
let pattern3 = /y$/gi
console.log(pattern3.test(string)) //
console.log(string.match(pattern3)) //

// character int [] check if any one character from it present in string or not
let pattern4 = /[aieou]/gi
console.log(pattern4.test(string)) //
console.log(string.match(pattern4)) //

let pattern5 = / Hi!.*/g
// .* means select character between Hi! until end 
// .* means any character any number of times

console.log(pattern5.test(string))
console.log(string.match(pattern5))

let pattern6 = / .* Hi/g
// .* means select character between starting until Hi! 
console.log(pattern5.test(string))
console.log(string.match(pattern6))

let pattern7 = / Hi/g
// * it count occurrences of string or  character in string
console.log(pattern5.test(string))
console.log(string.match(pattern7))

let pattern8 = /[a-z]/g
// [a-z] it checks for all alphabet small characters between a to z
console.log(pattern8.test(string))
console.log(string.match(pattern8))

let pattern9 = /\w/g
// \w it checks all alphanumeric characters and underscores in string
console.log(pattern9.test(string))
console.log(string.match(pattern9))

let pattern10 = /\d/g
// \w it checks only numeric values in string
console.log(pattern10.test(string))
console.log(string.match(pattern10))

let string2 = "Hello Enjoying my day at the beach! #beachday #day1";
let pattern11 = /#[a-zA-Z0-9]+/g;
// + is used match multiple characters in string after # in these string
console.log(pattern11.test(string2));
console.log(string2.match(pattern11));
// here we remove the hashtag from pattern matched result
console.log(string2.match(pattern11).map(str => str.replace("#", "")));

let pattern12 = /\s/g;
// \s match empty space in the string
console.log(pattern12.test(string2));
console.log(string2.match(pattern12));
console.log(string2.replace(pattern12,"_"));

let pattern13 = /l{2}/g;
// it check if l is come consecutive 2 times in the string or not
console.log(pattern13.test(string2));
console.log(string2.match(pattern13));

let pattern14 = /Hel{1,4}o/g;
// it check if l is come consecutive 2 times and more or less than and equal to 4 times in the string or not
console.log(pattern14.test(string2));
console.log(string2.match(pattern14));

let pattern15 = /Hel+o/g;
// + check if l is come consecutive more than one times in the string
console.log(pattern15.test(string2));
console.log(string2.match(pattern15));

let pattern16 = /Hel?o/g;
// \? check if l is come consecutive zero or one times in the string
console.log(pattern16.test(string2));
console.log(string2.match(pattern16));


