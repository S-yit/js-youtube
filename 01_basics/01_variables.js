const accountId = 144553
let accountEmail = "suraj@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "sy@gmail.com"
accountPassword = "12121"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])