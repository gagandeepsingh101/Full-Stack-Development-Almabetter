function checkSign(num1, num2, num3) {
    // Write your code inside this function only.
    let countPositive = 0;
    if (num1 > 0) {
        countPositive++;
    }
    if (num2 > 0) {
        countPositive++;
    }
    if (num3 > 0) {
        countPositive++;
    }
    if (countPositive === 3) {
        return "+++";
    }
    else if (countPositive === 2) {
        return "++-";
    }
    else if (countPositive === 1) {
        return "+--";
    }
    else {
        return "---"
    }

}
console.log(checkSign(2, -5, 7));