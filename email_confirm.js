const prompt = require("prompt-sync")();

                                          //  EMAIL @ DOMAIN VALIDATATION
function emailconfirm(){
console.log("EMAIL CONFIRM");
let email = prompt("enter email: ");
let email2 = prompt("Confirm email: ");
if (email == email2) {

  if (email.includes("@gmail.com")) {   //includes function
    console.log("successfull!");
  } 
  else {
    console.log("wrong formats should include @gmail.com");
  }
}
 else {
  console.log("confirmation failed");
}
}
emailconfirm();





