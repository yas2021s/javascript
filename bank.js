
const prompt = require("prompt-sync")();
let answer;
do{
console.log("1.LOAN");
console.log("2. WITHDRAWAL& DEPOSIT");
console.log("3.MY NET PROFIT ");

let Wddp  = 50000;

console.log("BANK OF BHUTAN\n");

   

let trans = parseInt(prompt("Enter 1-3 option "));
if(trans == 1){
    console.log("1.\t LOAN");
    let name = prompt("Name: ");

    let amt = prompt("Enter the amount: ")
    let period = prompt("Duration in year: ");
    let monthly =( amt * 0.15 * period);
    let total= (amt * 0.15  )/12;

    console.log("\nhi "+ name, " here is the result ","\nmonthly:"+monthly, "\ntotal: "+total);
       

}

    else if(trans == 2) {

        
        let trans =prompt("Enter:Withdrawal or Deposit?\n ");

       if(trans== "withdrawal"){
        let Wamt = parseInt(prompt("Withdraw amout: "));
        let total = (  Wddp - Wamt)

         if(Wamt <= Wddp ){
        console.log("Total remaning: "+total);
       }
     else{
        console.log("your balance is not enough");
     }
       }
     
     
    else if (trans== "deposit"){
    
    let deposit = parseInt(prompt("Deposit amount: "));
    let totalamount = (deposit + Wddp )
    console.log("Total amount: "+totalamount);

} else{
    console.log("select inputs");
}

     }



else if (trans ==3){
    
    let totalA = parseInt(prompt("total amount: "));
    let Duration = parseInt(prompt("Duration: "));
    let profit = (totalA * 0.05 * Duration)
    console.log("profit: "+profit);
    let total = (profit + totalA);
    console.log("total: "+total);

}


else{
    console.log("your number should be between 1-3");
}
answer = prompt("\nDo you want to use this service again?\n yes/no\n")
}
while (answer == "yes" || answer == "Yes")
