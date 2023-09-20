// This synchronously calls tasks and then prints console output 
function task(message) {
    // emulate time consuming task
    let n = 900000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');

// In asynchronous code the two tasks run parallel irrespective of completion on any one of the tasks in code

function greet() {
    console.log('This will appear next. Hello World!');
}
let uniqueId1=
// setTimeout is used to run the task once after certain specified timeout
setTimeout(function () {
    console.log("This message appears after 3 seconds");
    greet();
}, 3000);

// clearTimeout is used clear the setTimeout by excepting its return unique id 
clearTimeout(uniqueId1);

let i=0;
function taskInterval() {
    if(i>5){
        // clearInterval is used clear the setInterval by excepting its return unique id  
        clearInterval(uniqueId2);
    }
    i++;
    console.log('This will appear  times');
    
}
let uniqueId2=setInterval(taskInterval,1000);;


