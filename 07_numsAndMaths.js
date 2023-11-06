const score = 43
console.log(score) //Op: 43

const balance = new Number(48)// Op: Number: 48
//now it will be sure
// that datatype will be of Number type, in 
console.log(balance)

console.log(balance.toString())
// datatype will be changed from Number to String

console.log(balance.toFixed(2))// to give precision

const otherNumber = 123.8666
console.log(otherNumber.toPrecision(3))// Op: 124
console.log(otherNumber.toPrecision(4))// Op: 123.9
console.log(otherNumber.toPrecision(2))// Op: 1.2e+2


const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'))//Op: 1,00,00,00,000

//HW:- Check different mehtods of Number, by writing no to chrome console and just writing '.'


//*******Maths(library) *********/

console.log(Math) // Here, it will show only that Math is object
// Here, not much things will be shown in output
// But when we will go Inspect -> Console and write this a lot of mehtods will be shown

console.log(Math.abs(-4))// absolute
console.log(Math.round(4.6))// Op: 5
console.log(Math.round(4.2))// Op: 4
console.log(Math.ceil(4.2))// Op: 5 (Round off to nearest upper integer)
console.log(Math.floor(4.7))// Op: 4 (Round off to nearest lower integer)
console.log(Math.max(3,4,2,2,5,6,9))// will return max element of array
console.log(Math.min(1,2,4,2,6,3,2))// will return min element of array


console.log(Math.random())// any random value between [0,1]
console.log((Math.random()*10) + 1)// If we want value between 1 and 10
// Similary we can modify for whataver range of randome values we want
console.log(Math.floor(Math.random()*10) + 1)
// By using floow we can also get nearest integer random value


//For getting random values between givern range

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)



