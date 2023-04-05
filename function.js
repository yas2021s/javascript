const prompt = require("prompt-sync")();
let a,b, result;
a= parseInt(prompt("enter 1st number: "));
b= parseInt(prompt("enter 2st number: "));

function addition() {
    result = a +b;
    console.log("result: "+result);
}
function sub() {
    result = a - b;
    console.log("result: "+result);
}
addition();
sub();