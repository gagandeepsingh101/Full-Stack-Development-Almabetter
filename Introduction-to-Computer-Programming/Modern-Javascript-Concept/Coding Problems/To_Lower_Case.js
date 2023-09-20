var toLowerCase = function (s) {
    return s.toLowerCase();
};
var toLowerCase = function (s) {
    let ans = ""
    for (let c of s) {
        let n = c.charCodeAt()
        ans += n > 64 && n < 91 ? String.fromCharCode(n + 32) : c
    }
    return ans
};

console.log(toLowerCase("Hello"));