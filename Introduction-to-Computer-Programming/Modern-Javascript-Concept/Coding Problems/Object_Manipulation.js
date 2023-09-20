// Rewrite the function from Array_Manipulation using ES6 syntax (specifically, the Object.keys() method) and return array of key values.

function getObjectKeysES5(obj) {
    return Array.from(Object.keys(obj));
}

let object={"name": "John", "age": 25, "city": "New York"};

console.log(getObjectKeysES5(object));