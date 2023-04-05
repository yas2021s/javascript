const prompt = require("prompt-sync")();
let mainName, mainCode, mainSubject, mainMessage;
function email() {
  do {
    console.log("EMAIL");
    let option = prompt("send OR receive?");

    if (option == "send") {
      let name = prompt("Name: ");
      let code = parseInt(prompt("code: "));
      let subject = prompt("subject: ");
      let message = prompt("message: ");

      if (message.length <= 20) {
        mainName = name;
        mainMessage = message;
        mainCode = code;
        mainSubject = subject;

        console.log("successful send!!");
      }
       else {
        console.log("message length should not be more than 20");
      }
    } 

    else if (option == "receive") {
      let name = prompt("name: ");
      let code = prompt("code: ");

      if (name == mainName && code == mainCode) {
        console.log("\nsubject: " + mainSubject, "\nmessage: " + mainMessage);
      } else {
        console.log("invalid!!!");
      }
    } else {
      console.log("Please Enter Inputs!!!");
    }
    ans = prompt("press 1 to continue");
  } while (ans == "1");
}

email();
