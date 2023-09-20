function addPy(str) {
    // Your code goes here
    if (str.slice(0, 2) === "Py") {
        return str;
    }
    else {
        return "Py" + str;
    }
}
let str = "Pygame";
console.log(addPy(str));