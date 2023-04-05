

const prompt = require("prompt-sync")();

console.log("PELKHIL SCHOOL ADMISSION\n");

let grade = parseInt(prompt("Enter Your Grade: "));


if (grade == 1) {
    console.log("\nGRADE 1");
    console.log("Enter Your Details");
    let name = prompt("Name: ");
    let age = parseInt(prompt("Age: "));
    const CID = parseInt(prompt("CID: "));
    let eng = parseInt(prompt("English: "));
    let dzo = parseInt(prompt("Dzongkha: "));
    let math = parseInt(prompt("Maths: "));
    let fees = parseInt(prompt("Fees: "));

    let percentage = (eng + dzo + math) / 3;

    if (fees == 25000 && percentage >= 60) {

        console.log("\nAdmission Detail\nName: " + name, "\nAge: " + age, "\nPercentage: " + percentage);
        console.log("\nAdmission Successfull!!");
    }

    else {
        console.log("Admission Failed!!");
    }

}


else if (grade == 2) {

    console.log("GRADE 2");
    console.log("Enter Your Details");
    let name = prompt("Name: ");
    let age = parseInt(prompt("Age: "));
    const CID = parseInt(prompt("CID: "));
    let eng = parseInt(prompt("English: "));
    let dzo = parseInt(prompt("Dzongkha: "));
    let math = parseInt(prompt("Maths: "));
    let fees = parseInt(prompt("Fees: "));

    let percentage = (eng + dzo + math) / 3;

    if (fees == 30000 && percentage >= 40) {

        console.log("\nAdmission Detail\nName: " + name, "\nnAge: " + age, "\nPercentage: " + percentage);
        console.log("\nAdmission Successfull!!");
    }

    else {
        console.log("Admission Failed!!");
    }


}


else if (grade == 3) {

    console.log("GRADE 3");
    console.log("Enter Your Details");
    let name = prompt("Name: ");
    let age = parseInt(prompt("Age: "));
    const CID = parseInt(prompt("CID: "));
    let eng = parseInt(prompt("English: "));
    let dzo = parseInt(prompt("Dzongkha: "));
    let math = parseInt(prompt("Maths: "));
    let science = parseInt(prompt("science: "));
    let fees = parseInt(prompt("Fees: "));

    let percentage = (eng + dzo + math + science) / 4;

    if (fees == 45000 && percentage >= 50) {

        console.log("\nAdmission Detail\nName: " + name, "\nAge: " + age, "\nPercentage: " + percentage);
        console.log("\nAdmission Successfull!!");
    }

    else {
        console.log("Admission Failed!!");
    }


}

else {
    console.log("Wrong Input!!! \nEnter Grade from 1-3");
}





