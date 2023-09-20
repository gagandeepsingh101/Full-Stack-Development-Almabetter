function simpleCalculator(num1, num2, operator) {
    // Your code goes here
    var res;
    switch (operator) {
        case "+": {
            // It's check first before performing operation on it that input is valid Number or String
            // isNaN=is Not a Number It considers number in string as number format 
            // isNaN is true only if non-numeric value find in passing parameter in it
            if (isNaN(num1) || isNaN(num2)) {
                res = "Invalid input. Please enter numeric values.";
            }
            else {
                res = num1 + num2;
            }
            break;
        }
        case "-": {
            if (isNaN(num1) || isNaN(num2)) {
                res = "Invalid input. Please enter numeric values.";
            }
            else {
                res = num1 - num2;
            }
            break;
        }
        case "*": {
            if (isNaN(num1) || isNaN(num2)) {
                res = "Invalid input. Please enter numeric values.";
            }
            else {
                res = num1 * num2;
            }
            break;
        }
        case "/": {
            if (isNaN(num1) || isNaN(num2)) {
                res = "Invalid input. Please enter numeric values.";
            }
            else {
                // In division we check for denominator is equal to 0 or note because with denominator its gives result infinity. s
                if (num2 === 0) {
                    res = "Cannot divide by zero.";
                }
                else {
                    res = num1 / num2;
                }
            }
            break;
        }
        default:
            res = "Unsupported operator. Please enter a valid operator (+, -, *, /).";
            break;
    }
    return res;
}
console.log(simpleCalculator(4,5,"+"))
console.log(simpleCalculator(4,5,"/"))
console.log(simpleCalculator(4,5,"-"))
console.log(simpleCalculator(4,'h',"*"))
console.log(simpleCalculator(4,0,"/"))