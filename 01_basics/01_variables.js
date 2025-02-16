const accountId = 144553 
let accountEmail = "pankaj@google.com"
var accountPassword = "12345"
accountCity = "indore" //bina variable ke memory reserve kr sakte hai

// accountId = 2 // not allowed

accountEmail = "kuldeep@google.com"
accountPassword = "123456"
accountCity = "shujalpur"
let accountState;

console.log(accountId);
/*
Prefer not to use var 
Beacuse issue in block scope and functional scope
let , var, const where let>>var (better)
The difference between let and var is in the scope of the variables they create:
Variables declared by let are only available inside the
block where they’re defined. Variables declared by var
are available throughout the function in which they’re
declared. 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //To print many values