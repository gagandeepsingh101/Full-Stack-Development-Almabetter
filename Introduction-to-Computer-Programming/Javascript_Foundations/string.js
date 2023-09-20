/* String its is immutable and case-sensitive*/

/* Single quotes
let stringValue='John Smith'; */

/*Backticks 
let stringValue=`John Smith`; */

// Double quotes
let stringValue = "John Smith";

// length : it used to count the number of characters in string
console.log(stringValue.length);

// toUpperCase : it used to capitalize the all characters in string
console.log(stringValue.toUpperCase());

// toLowerCase : it used to change all characters to small aphabetic characters in string
console.log(stringValue.toLowerCase());

// indexOf : it used to to find the first index of the particular character in string
console.log(stringValue.indexOf("h"));

// lastIndexOf : it used to find the last index of the particular character in string
console.log(stringValue.lastIndexOf("h"));

//concat : it used to add another another in it at the last
console.log(stringValue.concat(" Rover"));

//slice : it used to fetch substrings from start index to end index of string
console.log(stringValue.slice(5,10));

//charAt : it used to find the character at particular index in string
console.log(stringValue.charAt(5));

//replace : it used to replace particular string with another particular string in string
console.log(stringValue.replace(" Rover",""));

//split : it used to split string into array of strings with given sparatted particular characters or strings string characters
console.log(stringValue.split(" "));

//trim : it used to remove whitespace from string in starting string and ending string
console.log(stringValue.trim());
