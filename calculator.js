const prompt = require("prompt-sync")();

// let number1 = parseInt (prompt("enter your number1:  ")); //parseInt expecting integers
// let number2 = parseInt (prompt("enter your number2:  "));
// console.log(number1+number2);
 //new line   \n 
let num1, num2, add, sub, mul, div;
console.log("calculator");
let answer;
do{
calculator = prompt("enter what calculation do you want to do : ");
num1 = parseInt(prompt("enter 1st number: "));
num2 = parseInt(prompt("enter 2st number: "));




if(calculator == "add"){
    add = num1 + num2;
    console.log(add);
}
else if(calculator == "sub"){
    sub = num1 - num2;
    console.log(sub);
}
else if(calculator == "mul"){
    mul = num1 * num2;
    console.log(mul);
}
else if(calculator == "div"){
    div = num1 / num2;
    console.log(div);
}
else{
    console.log("wrong inputs, enter number from 1-4");
}

answer = prompt("Do you want to use this service again?\n yes/no\n")
}
while (answer == "yes" || answer == "Yes")

