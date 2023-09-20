// for loop
for (let i = 0; i < 5; i = i + 2) {
    console.log(i);
}

// Infinite loop
// for (let i = 0;; i=i+2) {
//     console.log(i);
// }

// while loop(entry level loop)
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// i=0;
// while(true) {
//     console.log(i);
//     i++;
// }

// do while loop(exit level loop) : 
i = 0; 
do {
    console.log(i);
    i++;
} while (i < 5);

// it iterate first value inrespective of whether it given while condiion is true or false after first iteration its iterates next value with respect to given while condition
i=6
do {
    console.log(i);
    i++;
} while (i < 5);


// using of break statement
for (let i = 0; i<5; i++) {
    if(i===3){
        break;
    }
    console.log(i);
}

// using of continue statement
for (let i = 0; i<5; i++) {
    if(i===3){
        continue;
    }
    console.log(i);
}