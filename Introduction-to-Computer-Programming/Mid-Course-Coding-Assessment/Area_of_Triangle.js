function getTriangleArea(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
}
console.log(`Area of Triangle : ${getTriangleArea(3,4,5)}`);