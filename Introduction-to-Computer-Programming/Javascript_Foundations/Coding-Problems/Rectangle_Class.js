class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
r1=new Rectangle(5,4);
console.log("Area of Rectangle : "+r1.getArea());
console.log("Perimeter of Rectangle : "+r1.getPerimeter());