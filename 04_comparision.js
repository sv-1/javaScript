console.log(null>0) //Op: false
console.log(null==0) //Op: false
console.log(null>=0)//Op: true

// ye op isliye aare hain qki values ka conversion hota hai
// same confusino undefined k sath aati hai

console.log(undefined==0) //Op: false
console.log(undefined<0)  //Op: false
console.log(undefined>0)  //Op: false

//Note: Everything's fine if we're comapring 
//same datatypes using these operator, but when 
//datatypes are different

console.log("2">0) // Op: true
console.log("02">0) //Op: true
 // So if we compare different datatypes then results may be surprising
 // Becs for ex. above string is converted into no, that's why
 // o/p is true
 // So, we should generally compare same datatypes, qki jab bhi esa comparision hota hai 
 // toh result perdictible nhi hota kabhi kabhi

 //Note: hm oope wale comaparision avoid krne hote hain


 //***Strict Check-> It will check both values, and datatypes      ***/
 console.log("2"===2)