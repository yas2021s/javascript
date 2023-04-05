const prompt = require("prompt-sync")();

// for(let a= 1; a<=20; a ++){
//     console.log(a);
// }

                                 // EVEN NUMBERS

// for(let n=0; n<=20; n++){
// if (n==2 ){
// console.log("n");
// }
// else{
//     console.log("not an even number");
// }
// }
// for(a=1; a<=20; a++){
//     a++
//     console.log(a);
// }

                                  // ODD numbers

// let a = 1;
// do{
//         console.log(a);
//          a++
//          a++
//       }while(a<=20)

//   let a = 1;
//   while(a<=20){
//       console.log(a);
//    a++;
//    a++;
//   } 


let answer;
do{
console.log("num1");
console.log("num2");
console.log("num3");
let num = parseInt(prompt("Enter 1-3 option "));
let a,b,c
if (num == 1 ){
   
    let a =parseInt( prompt("a: "));
    let b =parseInt( prompt("b: "));
    let c =parseInt( prompt("c: "));
    
    if(a <= b && b<= c){
        
       console.log("Answer: "+a, "b: "+b,"c: "+c);
    }
    else {
       
        console.log("wrong");
    }
}

else if (num == 2 ){
   
    let a =parseInt( prompt("a: "));
    let b =parseInt( prompt("b: "));
    let c =parseInt( prompt("c: "));
    
    if(a <= b && b<= c){
        
       console.log("Answer: "+a, "b: "+b,"c: "+c);
    }
    else {
       
        console.log("wrong");
    }
}
else if (num == 3 ){
   
    let a =parseInt( prompt("a: "));
    let b =parseInt( prompt("b: "));
    let c =parseInt( prompt("c: "));
    
    if(a <= b && b<= c){
        
       console.log("Answer: "+a, "b: "+b,"c: "+c);
    }
    else {
       
        console.log("wrong");
    }
}


else{
    console.log("your number should be between 1-3");
}
answer = prompt("\npress 1 to continue\n")
}
while (answer == "1" )



