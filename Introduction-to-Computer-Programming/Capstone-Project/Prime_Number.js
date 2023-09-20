function findPrimes(n) {
    // Write your code here
    let primesNo = [];
    for (let i = 2; i <= n; i++) {
        let flag = true;
        for (let j = 2; j <= i - 1; j++) {
            if (i % j === 0) {
                flag = false;
            }
        }
        if (flag) {
            primesNo.push(i);
        }
    }
    return primesNo;
}
console.log(findPrimes(40));