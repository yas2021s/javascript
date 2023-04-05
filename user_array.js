const prompt = require("prompt-sync")();
let answer;
let userName = [];
function users() {
 
    console.log("USER DATA");
    console.log("1.add users");
    console.log("2.remove ");
    console.log("3.view users");
    let option = parseInt(prompt("Enter 1-3 option "));

    if (option == 1) {
      userName.push(prompt("enter a username:"));
      console.log("successful added");
    } 
    else if (option == 2) {
      userName.pop();
      console.log("successful removed");
    } 
    else if (option == 3) {
      console.log("\nuserName:" + username);
    } 
    else {
      console.log("invalid");
    }
  
}
users();
