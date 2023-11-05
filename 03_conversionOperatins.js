let score=34;

console.log(typeof(score))
console.log(typeof score)//both syntax are correct 

let valueInNumber=Number(score)//Now it's guarantee that
console.log(valueInNumber)//datatype is number

//NOTE:- But let's suppose, if we'd put "score=34ab"
//Here, there are both numbers and characters, in this case 
//would the datatype would be converted to Number, yes when 
//will see typeof it will show "Number", but when we will
//print the value of valueInNumber, than "NaN" will be printed
//So, we've to take care of this

// Flash Notes for conversion of datatypes:

// "33"(String) => 33 (Number)
// "33abs"(String) => NaN
// true (bool) => 1; false => 0
// 1 (Number) => true (bool) and 0 => false
// "" (empty string) => false(bool) and "anyString" => true

//Similarly numbers can be converted to strings, like following:
let no=34;
let stringNumber=String(33)//So, here stringNumber is of string type






//      ************************** Operations ************//

// Note: Same as operations (i.e., +, -, /, * , % in c++)
  
//Concatinating strings
let str1 = "Hare"
let str2 = "Krishna"
console.log(str1 + str2)  // O/p: HareKrishna

//Few special cases:
console.log("1" + 2); // O/p: 12 (string) Note: no is converted to string
console.log(1 + "2"); // O/p: 12 (string)
console.log("1" + 2 + 2); // O/p: 122 (string)
console.log(1 + 2 + "2"); // O/p: 32 (string)

console.log(+ true) // O/p: 1, since true is treates as 1 in No
console.log(+ "")   // O/p: 0, since empty string is treated as 0

let incrementNo = 100
console.log(incrementNo++) // O/p: 101
console.log(++incrementNo) // O/p: 102