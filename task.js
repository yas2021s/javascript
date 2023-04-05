const prompt = require("prompt-sync")();
                                                //Checking vowels

// let count =0 ;

// let word =prompt("Enter any word: "); 
// for( x = 0; x<=word.length; x++){ 
   
// if(word[x] == "a" || word[x] == "e" || word[x] == "i" ||word[x] == "o" ||word[x] == "u"){  
//    count ++;
// }

// }
//   console.log("Total vowels: "+count);



                                            //   checking const

let count =0 ;
let count2 = -1;
let word =prompt("Enter any word: "); 
for( x = 0; x<=word.length; x++){ 
   
if(word[x] == "a" || word[x] == "e" || word[x] == "i" ||word[x] == "o" ||word[x] == "u"){  
   count ++;
}
else{
    count2 ++;
}
}
  console.log("Total vowels: "+count);
  console.log("Total const: "+count2);
