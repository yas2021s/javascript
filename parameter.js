const prompt = require("prompt-sync")();

// function plan(name,age) {
//     return "\nhello world"+'\nname:'+name+'\nage:'+age;  // Return will pass in parameter
// }
// let name= "yaes";
// let age = 21;

// console.log(plan(name,age)); 
let option= (prompt("1.Add\n 2.sub\n 3.div\n 4.product"))
function variable() {
 
    let a= parseInt(prompt("enter First value: "))
    let b= parseInt(prompt("enter second value: "))

    if(option ==1 ){
        add(a,b);
         
    }

    else if (option==2){
        sub (a ,b);
        
    }

    else if (option==3){
        div(a,b);
    }

    else if (option==4){
        product (a,b);
    }

    else {
        console.log("Enter inputs!!!");
    }
    
    }  
 

    function add(a,b) {
    
        let sum = a+b;
        console.log(sum);
        
    }

    function sub(a,b) {
        
    let sub = b-a;
    console.log(sub);
    }

    function div(a,b) {
        let div= a/b;
        console.log(div);
    }
    function produt(a,b) {
        let produt= a*b;
        console.log(produt);
    }
    variable();
