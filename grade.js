const prompt = require("prompt-sync")();
let answer;
console.log("Grade A = 100-90");
console.log("Grade b = 89-60");
console.log("Grade c = 59-30");
console.log("Grade d = 29-10");
console.log("Grade e = 0");

do{
let grade = parseInt(prompt("Enter your marks to check your grade\n"));
if ( grade <= 100 && grade >=90){
    console.log("Grade A");
}
else if(grade <=90 && grade >=60){
    console.log("Grade b");
}
else if(grade <=60 && grade >=30){
    console.log("Grade c");
}
else if (grade <= 30 && grade >=10){
        console.log("d");
    }
    else if (grade <= 10 && grade >=1){
        console.log("e");
     }   
    
     else if (grade =0){
    console.log("f");
    }   
    else{
        console.log("wrongInputs");
    } 
    answer = prompt("\npress 1 to continue\n")
}
while (answer == "1" || answer == "one")
