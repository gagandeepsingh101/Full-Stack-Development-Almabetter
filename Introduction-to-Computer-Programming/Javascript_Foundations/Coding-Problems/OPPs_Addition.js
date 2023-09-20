const calculator = {
    // Your code goes here
    result: 0,
    add: function (a, b) {
        this.result = a + b;
    }
};

const boundAdd = calculator.add.bind(calculator)(5,6);
console.log(calculator.result);
