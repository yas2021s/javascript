const prompt = require("prompt-sync")();


// SWITCH
let details = prompt("Task: ");

switch(details)
{
    case "wake up":
        console.log("7am");
        break;

        case "breakfast":
        console.log("7:30am");
        break;

        case "lunch":
        console.log("12pm");
        break;

        case "dinner":
        console.log("8pm");
        break; 
          
    default:
        console.log("wrong inputs");
       
}