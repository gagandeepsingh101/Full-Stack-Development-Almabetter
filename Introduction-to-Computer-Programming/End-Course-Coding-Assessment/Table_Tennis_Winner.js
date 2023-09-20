function winorlose(s) {
    // Your code goes here
    let arsh = 0, other = 0;
    for (let point of s) {
        if (point === '1') arsh++;
        else other++;
        if ((arsh >= 11 || other >= 11) && Math.abs(arsh - other) > 1) break;
    }
    return (arsh > other ? "WIN" : "LOSE");
}
console.log(winorlose(("111112112222222211111")));