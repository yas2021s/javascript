const prompt = require("prompt-sync")();
let answer;
let userName=[];

 for (i=0; i<=4; i++){
     userName.push( prompt('enter a 5 users:'));
  
}
do{
    let numbers= parseInt(prompt("enter a num 0-4: "))
    console.log(userName[numbers]);
    answer= prompt("press 1 to continue")
}while(answer=='1')

