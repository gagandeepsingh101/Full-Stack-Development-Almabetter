function parseJSON(jsonString) {
    return JSON.parse(jsonString);
}

let jsonString = '{"name": "John", "age": 30, "isStudent": true}';
let jsonObject = parseJSON(jsonString);
console.log(jsonObject);
