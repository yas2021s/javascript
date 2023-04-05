const prompt = require("prompt-sync")();
                            //    similiar
let count=0;

let first =prompt("1stword: ");
let second =prompt("2ndword: ");
let a = 4;
 for( x = 0; x<=4; x++){ 
   
 if(first[x] == second[a] || first[x] == second[a-2] || first[x] == second[a-3] || first[x] == second[a-4]){  
   count++;
 }
}
  console.log("similiar: "+count);
  