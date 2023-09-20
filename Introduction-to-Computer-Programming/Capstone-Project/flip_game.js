function findMove(s) {
    // Write your code inside this function only.
    let res = [];
    let count = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) === "+" && s.charAt(i + 1) === "+") {
            let val = s.slice(0, i) + "--" + s.slice(i + 2);
            res.push(val);
        }
    }
    return res;
}
console.log(findMove("++++"));
