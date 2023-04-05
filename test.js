const prompt = require("prompt-sync")();
function employees() {
  let userName=[];
 
  let date=[];

do{
  console.log("EMPLOYEE LIST");
  console.log("\n\t\tEMPLOYEE NAME: " + "\tEMPLOYEE ID: " + "\tDATE: ");
 
  for(let i=0; i<userName.length; i++){
      console.log('\t\t'+userName[i]+ '\t\t' + 'em-'+i+ '\t\t' +date[i]);
  }
  
  console.log("1.ADD EMPLOYEE");
  console.log("2. REMOVE EMPLOYEE ");
  console.log("3.UPDATE EMPLOYEE");
  let employee = parseInt(prompt(": "));
  
  
  if (employee == 1) {
   
    userName.push(prompt("Employee name: "));
      date.push(prompt("Employee date: "));
      console.log("successful added");

    } 
  
  else if (employee == 2) {
      let deleteId = parseInt(prompt("Enter employee id to Delete: "));
      if(deleteId <= userName.length-1 ){
      userName.splice(deleteId,1);
      date.splice(deleteId,1);
      console.log("successful removed");
    }  else console.log("invalid Id");
      }

      
      
      
    else if (employee == 3) {
      
      let editd = parseInt(prompt("enter employe id to update: "));
      

      if(editd <= userName.length-1){
          let name = prompt("Name: ");
          let dates = parseInt(prompt("enter date: "));
          userName[editd] = name;
          date[editd] = dates;
         console.log("updated")
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






