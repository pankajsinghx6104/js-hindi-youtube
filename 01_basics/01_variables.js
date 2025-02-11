const accountId = 144553 
let accountEmail = "pankaj@google.com"
var accountPassword = "12345"
accountCity = "indore"

// accountId = 2 // not allowed

accountEmail = "kuldeep@google.com"
accountPassword = "123456"
accountCity = "shujalpur"
let accountState;

console.log(accountId);
/*
Prefer not to use var 
Beacuse issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])