var createCounter = function (init) {
    // Your code goes here
    let curr = init
    function increment() {
        return ++init
    }
    function reset() {
        init = curr;
        return init;
    }
    function decrement() {
        return --init;
    }
    return {
        increment, decrement, reset
    }
};
const counter = createCounter(5);
console.log(counter.increment());   
console.log(counter.reset()); 
console.log(counter.decrement()); 
