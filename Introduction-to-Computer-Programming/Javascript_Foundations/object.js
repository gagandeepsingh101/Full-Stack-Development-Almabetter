// Singleton object / object constructor method
let obj = new Object();
obj.Name = "Jackson";
obj.Age = 34;
obj.email = "Jackson464@gmail.com";
console.log(obj);

// Object Literal
let obj1 = {
    name: "John Smith",
    age: 25,
    email: "john.smith56@gmail.com"
}

// Using dot notation 
console.log(obj1.name);
console.log(obj.Name);

// Using bracket notation
console.log(obj1['name']);
console.log(obj['Name']);

// Nested objects
let obj3 = new Object();
obj3.Roll_No = 121;
obj3.Name = "Elisa Baith";
obj3.Marks = {
    DSA: 67,
    IOT: 87,
    PHP: 57,
    SE: 77,
    AP: 97,
    CO: 45
};

// Access value  from outer object into inner object 
console.log(obj3.Marks.SE);

// used delete in value of particular attribute in object
console.log(obj3.Marks);
obj3.Marks.CO = "";
console.log(obj3.Marks);

// used delete in object to delete object paticular property/attribute
delete obj3.Marks.CO;
console.log(obj3.Marks);

// keys is used to fetch only key of attribute
console.log(Object.keys(obj3));

// values is used to fetch only value of attribute
console.log(Object.values(obj3));

// entries is used to convert object into multidimensional array except inner object
console.log(Object.entries(obj3));

// Assign is used copy all enumerable properties from one object to another to another object object
let personProject = { Project: 56 };
Object.assign(obj3.Marks, personProject)
console.log(obj3);

// freeze is used to allow the restriction on the changging object properties values
Object.freeze(obj3)
obj3.Roll_No = 1;
console.log(obj3);

// declare function in object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    startEngine: function () {
        console.log("Engine started!");
    }
};
car.startEngine();

let student = {};

// adding a property
student.name = 'John';

// adding a method
student.greet = function () {
    console.log('hello');
}

// accessing a method
student.greet(); // hello


// this always refers to the object and it's used only inside the object
const person = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function () { console.log('The name is' + ' ' + this.name); }
};

person.greet();