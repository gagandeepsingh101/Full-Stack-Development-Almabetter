class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
const circle = new Circle(3);

// Compute and print the area
console.log("Area:", circle.getArea());

// Compute and print the circumference
console.log("Circumference:", circle.getCircumference());