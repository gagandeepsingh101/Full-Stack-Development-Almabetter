// Class
class Circle {
    // A special method used to initialize object instances. It is called when you create a new object using the class.
    constructor(radius) {
        // this keyword is used here to use class variables
        this.radius = radius;
    }
    // Declarare Method in Class
    area() {
        console.log("Area of circle : " + Math.PI * this.radius * this.radius);
    }
    circumference() {
        console.log("Circumference of circle : " + 2 * Math.PI * this.radius);
    }

}

// Object
c1 = new Circle(4);
c1.area();
c1.circumference();




// Object created
let obj = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
function print() {
    console.log(`${this.getFullName()}`);
};

// Use Bind function : for use of object inner properties into the function with using this keyword.

// Bind function : expand function scoped by making a object scope properties visible for function in which we used that object random property

// It work only with no parameterized function


function printpro(greetMessage) {
    console.log(`${greetMessage} , ${this.getFullName()}`);
};

// The call() method invokes a function with a given this value and arguments provided individually.

printpro.call(obj, "Hello");
printpro.bind(obj)("Hello");

// The apply() method is similar to call(), but it accepts arguments as an array.
printpro.apply(obj, ["Hello"]);


/* Prototype :It allows you to add properties and methods to objects, which can then be inherited by other objects. */

function Person(firstName, lastName, age, eyecolor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyecolor = eyecolor;
}
Person.prototype.medium = "English";
Person.prototype.printAll = function () {
    return `Name: ${this.firstName} ${this.lastName} \n Age: ${this.age} \n eyecolor: ${this.eyecolor}\n Medium: ${this.medium}`
}
let p1 = new Person("John", "Bat", 45, "blue");
console.log(p1.printAll());


// JavaScript Inheritance
// Prototypal Inheritance :JavaScript uses prototypal inheritance, which means that objects can inherit from other objects:

function Indian(firstName, lastName, age, eyecolor, location) {
    Person.call(this, firstName, lastName, age, eyecolor);
    this.location = location;
}
Indian.prototype = Object.create(Person.prototype);
Indian.prototype.constructor = Indian;
Indian.prototype.printLocation = function () {
    return `\n Person live in ${this.location}`;
}
const p2 = new Indian("Rakesh", "Verma", 34, "brown", "Rajasthan");

console.log(p2.printAll());
console.log(p2.printLocation());


// Inheritance in class
class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        return "\n"+this.name+" is eating";
    }
};

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        return this.breed+" is barking";
    }
}

Dog=new Dog("Dog","PitPull");
console.log(Dog.eat());
console.log(Dog.bark());