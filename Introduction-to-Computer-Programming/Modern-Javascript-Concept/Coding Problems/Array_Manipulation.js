// Rewrite the function from Question 1 using ES6 syntax (specifically, the Object.keys() method).

let obj = {"name": "John", "age": 25, "city": "New York"}

const getObjectKeysES6 = (obj) => {
    return Object.keys(obj);
};

console.log(getObjectKeysES6(obj));