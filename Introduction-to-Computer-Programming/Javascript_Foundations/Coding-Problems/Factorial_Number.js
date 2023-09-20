function factorial(num) {
    // Your code goes here

    var fac = 1;
    for (let i = 2; i <= num; i++) {
        fac = fac * i;
    }
    return fac;
}

console.log(factorial(6));