const prompt = require("prompt-sync")();
let number =[];
// if we use array let number array =[] then we have to use push method
for(let i=1; i<=10; i++){
    
number.push(parseInt(prompt("enter you number"+i+": ")));

}
