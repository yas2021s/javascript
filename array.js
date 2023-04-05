                                             // ARRAY[]hold multiple data
                                             
 const prompt = require("prompt-sync")();
//  let names = ['yaes', 'java', 'blue']
//  names[1]='lhamo';//replacing
//  names.push('namgay'); //add
// names.unshift('red'); //add at start
// names.pop() // remove last
//  console.log(names);


// const names = ['yaes', 'java', 'blue']
// names[1]='lhamo';//replacing
// names.push('namgay'); //add
// names.unshift('red'); //add at start
// names.pop() // remove last
// console.log(names);

//                                             // Inside of obeject

let myData = {
    fullName:'Yaezer lhamo',
    CID:11502002071,
    DOB:'08/12/2001',
    phoneNo: 17850669,
    Email:'yaezerl@gmail.com',
    hobbies:['gaming','editing video', 'cooking'],

    address:{
        village:'bidung',
        dzongkhag:'Tashigang'
    }
}
console.log(myData.hobbies.village); //object
console.log(myData.hobbies[1]); array

// let names = ['yaes', 'java', 'blue']
// for (i=0; i<3; i++){
//     console.log(names[i]);
// } if you want space 