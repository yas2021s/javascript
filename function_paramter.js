const prompt = require("prompt-sync")();
function calculate(a=3,b=1) {//default variables
                             //local variables
                             //value wont be returned
                             //will replaced when assigned

    let sum = a+b;
    return sum;   //will return the value of sum to calculate function
    
}
console.log(calculate(8,10)); /* it will replaced this answer */
                              //assigning var
                              //using paramters