function calculateArea(shape, parameters) {
    //Your code goes here
    switch (shape) {
        case "rectangle":
            return parameters[0] * parameters[1];
        case "circle":
            return Math.PI * parameters[0] * parameters[0];
        case "triangle":
            return parameters[0] * parameters[1] * 0.5;
        default:
            return "Invalid shape";
    }
}
console.log(calculateArea("rectangle",[3,4]));
console.log(calculateArea("circle",[5]));
console.log(calculateArea("triangle",[6,8]));