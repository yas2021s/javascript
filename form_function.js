const prompt = require("prompt-sync")();

// paramter passing
function form(name,age,hobbies) {
    console.log("\t\tRESULT");
    console.log("name: "+ name);
    console.log("age: "+ age);
    console.log("hobbies: "+ hobbies);
}
function desc(name,age,hobbies) {
    console.log("hi my name is "+name+ "im age"+age+"and i like"+hobbies);
}
    let name = (prompt("Enter name: "));
    let age = (prompt("Enter age: "));
    let hobbies = (prompt("Enter hobbies: "));
    

form(name, age, hobbies);
desc(name,age,hobbies);

