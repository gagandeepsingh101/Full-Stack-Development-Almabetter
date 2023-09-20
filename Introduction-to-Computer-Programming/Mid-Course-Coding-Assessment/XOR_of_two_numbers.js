function myXOR(x, y) {
    // Your code goes here
    //   return x^y;
    return (x&~(y))|(y&~(x))
}
console.log(myXOR(3,5));