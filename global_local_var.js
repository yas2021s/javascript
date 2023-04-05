// Local variable and global 
const prompt = require("prompt-sync")();
let a= 1;
let b=2;        //GLOBAL VARIABLE

function add() {
    console.log(a,b);
    let c= 2;
    let d= 3;   
    console.log(c,d);   // LOCAL VARIABLE
}
add();