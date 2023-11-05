const id=12121;
let emailId="safad@gmai.com"
var password=213432
accountCity="Gurgaon"
let accountState;
// id=3(not allowed in const)
emailId="flsajfl.com"
password="21312321";
//Note: Prefer not to use "var" becs of issue in 
//issue in functional scope and block scope
console.log(id)
console.log(emailId)


//Or we can use table to print all using single table
console.table([id, emailId,password, accountState]) 