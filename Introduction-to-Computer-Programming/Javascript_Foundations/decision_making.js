// In Decision Making statement curly braces{} for more than one statement in particular statement

//  if statement
let evenNo = 4;
if (evenNo % 2 === 0) console.log("It is a even number");

// if else statement
let age = 20;
if (age > 18) console.log("You can drive car");
else console.log("You cannot drive car");

// if else if else statement
let a = 5;
let b = 6;
let c = 7;
if (a > b && a > c) console.log(a + " is greatest amoung the car");
else if (a > b && a > c) console.log(b + " is greatest amoung the car");
else console.log(c + " is greatest amoung the car");

// switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("1st day of week")
        break;
    case "Tuesday":
        console.log("2nd day of week")
        break;
    case "Wednesday":
        console.log("3rd day of week")
        break;
    case "Thursday":
        console.log("4th day of week")
        break;
    case "Friday":
        console.log("5th day of week")
        break;
    case "Saturday":
        console.log("6th day of week")
        break;
    case "Sunday":
        console.log("7th day of week")
        break;
    default:
        console.log("Enter correct day");
        break;
}