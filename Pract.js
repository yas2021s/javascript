const prompt = require("prompt-sync")();

console.log("Pelkhil School Admission\n");
let grade = parseInt(prompt("enter your grade: "));

if (grade == 1) {
  let name = prompt("enter your name: ");

  let age = prompt("enter your age: ");

  let cid = prompt("enter your cid:  ");

  let fees;

  eng = parseInt(prompt("enter your eng: "));
  dzo = parseInt(prompt("enter your dzo: "));
  math = parseInt(prompt("enter your math: "));
  fees = parseInt(prompt("enter your fees: "));

  let percentage = (eng + dzo + math) / 3;
  if (percentage >= 60 && fees == 25000) {
    console.log("admisssion successful");
    console.log(
      "\nAdmission Detail\nName: " + name,
      "\nAge: " + age,
      "\nPercentage: " + percentage
    );
  } else {
    console.log("Admission Failed!!");
  }
} 

else if (grade == 2) {
  let name = prompt("enter your name: ");

  let age = prompt("enter your age: ");

  let cid = prompt("enter your cid:  ");

  let fees;
  eng = parseInt(prompt("enter your eng: "));
  dzo = parseInt(prompt("enter your dzo: "));
  math = parseInt(prompt("enter your math: "));
  fees = parseInt(prompt("enter your fees: "));

  let percentage = (eng + dzo + math) / 3;

  if (percentage >= 40 && fees == 30000) {
    console.log("admisssion successful");
    console.log("admission details\nName:" + name, "\nage: +age ");
  } else {
    console.log("Admission Failed!!");
  }
} else if (grade == 3) {
  let name = prompt("enter your name: ");

  let age = prompt("enter your age: ");

  let cid = prompt("enter your cid:  ");
  let fees;

  eng = parseInt(prompt("enter your eng: "));
  dzo = parseInt(prompt("enter your dzo: "));
  science = parseInt(prompt(" enter your science: "));
  math = parseInt(prompt("enter your math: "));
  fees = parseInt(prompt("enter your fees: "));

  let percentage = (eng + dzo + math + science) / 4;

  if ((percentage >= 50 && fees == 45000)) {
    console.log("admisssion successful");
    console.log("admission details\nName:" + name, "\nage: +age ");
  } else {
    console.log("Admission Failed!!");
  }
} else {
  console.log("please \nEnter Grade from 1-3");
}
