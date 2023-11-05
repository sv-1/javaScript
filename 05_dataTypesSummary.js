// Two types of datatypes on the basis of how it is store and accessed in the memory:
    // I) Primitive (call by value)
        // 7 types: String, Number, Boolean, Null(khali), Undefined
        // Symbol (for uniqueness), BigInt

    //II) Non-Primitive or Reference Types:
        // Arrays, Objects, Functions

// Note: JS is dynamic typing language, when we declare a variable
//       we don't need to define which type of variable it is
// Type Script is cousin of JS, where we need to define datatype

const superHeoroes = ["Shaktiman", "Doga", "NaagRaj"]
let myObj = { //Object
    name: "Krishna",
    age: 22
}

const myFunction = function(){
    console.log("Hare Krishna")
}

const a=undefined
console.log(typeof myFunction) // op: function (we say it function object) 
console.log(typeof null) // op: object (Null ka datatype object hota hai)
console.log(typeof a)    // Op: undefined
 //Note: interviews mei puch lete hain, ki null ka dataype kya aata hai, 
 //  undefined ka kya aata hai

 


 /********    Memory(Stack and Heap)*********/

 //Primitive datatypes uses Stack Memory   (Isme value ya object ki ek copy di jati hai usme change wgera kr skte hain)

 //Non-Primitive datatypes uses Heap Memory  (Isme value ya obj ka reference diya jata hai or koi bhi change original 
 // value mei change layega)

 let name1="Krishna"    //Since these are primitive datatypes, so they use stack memory and a copy of name1 
 let originalName=name1// is passed to originalName, no change to name1
 originalName = "Ram"
 console.log(name1)
 console.log(originalName)


 //Object
 let user1 = {
    email: "aljdad@gmail.com",
    phn: 3243232
 }

 let user2 = user1
// Here, it is non-primitive datatype and and reference to original memory in heap (of user1) is given to user2 
// Any changes applied to user2 will directly be applied to user1 object Ex.

user2.email = "changedEmail@gmail.com"
// Email in user1 obj is directly changed

console.log(user1.email) //Op: changedEmail@gmail.com
console.log(user1.phn)

