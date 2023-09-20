// Function Declarations

/* function functionName(parameter1, parameter2) {
    Function body: code that is executed when the function is called
    You can use parameters and perform operations here
    return result; // Optional: You can return a value from the function
} */

function sum1(a, b) {
    console.log(a + b);
}

// Function call with two argument pass 5 and 6
sum1(5, 6);

function sum2(a, b) {
    // if return statement is not used then it return undefined where function is invoked(called) 
    return a + b;
}

// Function call with two argument pass 5 and 6
console.log(sum2(5, 6));

//  Here we used default Parameters in the function
function sum3(a = 5, b = 3) {
    return a + b;
}
console.log(sum3());

// CalculateRectangleArea is helper function which calculates the area of the rectangle using the width and height of the rectangle from parameters

function calculateRectangleArea(width, height) {
    return width * height;
}

const area = calculateRectangleArea(5, 10);
console.log(area);
