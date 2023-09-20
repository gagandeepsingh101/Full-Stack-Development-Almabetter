function lShift(s) {
    // Your code goes here
    return s.substr(1) + s.charAt(0);

}
function rShift(s) {
    // Your code goes here
    return s.charAt(s.length - 1) + s.substr(0, s.length - 1);
}
console.log(lShift('ab') === rShift('ab'));