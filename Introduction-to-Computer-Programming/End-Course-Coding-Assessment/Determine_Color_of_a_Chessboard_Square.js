var squareIsWhite = function (coordinates) {
    // Your code goes here
    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const [l, n] = coordinates.split("");
    if (letter.indexOf(l) % 2 === 0 && n % 2 === 0 || letter.indexOf(l) % 2 === 1 && n % 2 === 1) {
        return true;
    }
    else {
        return false;
    }
};
console.log(squareIsWhite("a3"));