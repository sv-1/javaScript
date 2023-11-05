const name = "Krishna"
const repoCount = 52

console.log(name + repoCount) // Old way of concatenating string

// Latest way of this is given below:
console.log(`Hello my name is: ${name} and my repo count is: ${repoCount}`)

// Best way declaring string dynamically using string object

const gameName = new String("hitesh-hc") 
console.log(typeof(gameName)) // If we run this 
// way in browser console then string is formed in form of 
// key-value pairs and also we get a lot of functions to work 
// Our main aim in string is to master those functions
//Some functions are given below:

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase)
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))
//slicing a string

const newString = gameName.substring(1,4)// substring mei hm negative values
console.log(newString)                   // nahi de skte hain, di toh vo 0 se star krdega

const anotherString = gameName.slice(-8,3)       // isme -ve de skte hain
console.log(anotherString) 

const newStrinOne = "    Hey,Yoo!  "
console.log(newStrinOne)
console.log(newStrinOne.trim()) // So from here 
// we can see .trim() extra spaces in front and end of string
// HW - Read trim function documentation on mdn

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

//jitna hm strings se familiar honge utna baad mei 
//backend wgera mei ease hogi

console.log(url.includes('sundar'))


// split method in js, search on google and see how to use it on strings
// and than use it

const gameName2 = "hitesh-hc-Comment"
console.log(gameName2.split("-"))

// Strings ki practice krni pdegi using different functions