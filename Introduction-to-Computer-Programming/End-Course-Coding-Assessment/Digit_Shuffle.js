function isMultipleOfFive(n) {
    // Your code goes here
    let numStr = n.toString().split("");
    return numStr.includes("5") || numStr.includes("0")
}
console.log(isMultipleOfFive(1230953));