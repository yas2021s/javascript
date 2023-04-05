const prompt = require("prompt-sync")();
let userName=[];
let id=[];
let date=[];
let Em = [];
let answer;

function employees() {
  do{
    console.log("EMPLOYEE LIST");
    console.log("\n\tEMPLOYEE NAME \tEMPLOYEE ID \tDATE ");
    
    for(let i=0; i<userName.length; i++){
      
      console.log("\t\t" +userName[i] + "\t\t" +Em[i] + id[i]  +"\t\t" + date[i] +"\t\t");
    }   
    console.log('1.ADD EMPLOYEE \n2.REMOVE EMPLOYEE\n3.UPDATE EMPLOYEE');
    let employee = parseInt(prompt(": "));
    if (employee == 1) {
      console.log("\n1.ADD EMPLOYEE ");
    const users = userName.length + 1; // give u length of array from 1
    userName.push(prompt("Employee name: "));
    date.push(prompt("Employee date: "));
    Em.push('Em: ');
    id.push(users)
    console.log("successful added");

      } 

    // else if (employee == 2)  {
    //   let id = parseInt(prompt("enter employee EM-"));
    //   if (id != -1) {
    //     delete userName[id];
    //     delete id[id];
    //     delete date[id];
    //     console.log("successful removed");
    //   }
    //    else 
    //    {
    //     console.log("could not delete"); 
    //   }
    // }

    else if (employee == 2) {
    console.log("\n2.REMOVE EMPLOYEE ");
    let id2 = parseInt(prompt('Enter Employee ID: '))

    if (id.includes(id2)){
    //id2=-1   
    id2 = id2 - 1; //position of array
    // let username = array name start from 0 but id start from 1 so that why we use -1
    userName[id2] = " ";
    date[id2] = " ";
    Em[id2] = " ";
    id [id2] = " ";
    console.log("removed!");
    } 
}

    else if (employee == 3) {
       
      console.log("3.UPDATE EMPLOYEE");
      let editd = parseInt(prompt("enter employe id to update: "));
      
      if(id.includes(editd)){
        let name = prompt("Name: ");
        let dates = parseInt(prompt("enter date: "));
        editd = editd - 1;
        userName[editd] = name;
        date[editd] = dates;
        console.log("updated");
      }
      else{
        console.log("falied to update");
      }
    } 
   else{
    console.log('invalid');
   }
    answer= prompt("press 1 to continue")
  }while(answer=='1')
 
}
employees();














