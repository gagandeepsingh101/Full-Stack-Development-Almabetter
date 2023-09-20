//  JSON is similar to Object but both key is represented with double quoted characters and is store in file_name.json instead of javascript file
const data = {

    // The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs. For example,
    "name": "Gagandeep",
    "age": 22,
    "hobby": {
        "reading": true,
        "gaming": false,
        "sport": "football"
    },
    "class":
    // JSON array is written inside square brackets [ ]. For example, 
    ["JavaScript", "HTML", "CSS"]
}

// access the json object 
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML

// JavaScript objects can be converted to JSON using the JSON.stringify() method.
console.log(JSON.stringify(data)); 

// JSON objects could be converted to JavaScript objects using the JSON.parse() method
console.log(JSON.parse(JSON.stringify(data))); 