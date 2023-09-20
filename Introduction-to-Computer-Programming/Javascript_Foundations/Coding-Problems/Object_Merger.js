function mergeObjects(obj1, obj2) {
    // Your code goes here
    return Object.assign(obj1, obj2);
}
let obj1={ "name": "John", "age": 30 };
let obj2={ "isStudent": true, "age": 25 };

console.log(Object.assign(obj1, obj2));