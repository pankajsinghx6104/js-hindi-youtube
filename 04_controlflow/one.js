// if statement
// if statement is used to execute a block of code if a specified condition is true.
// syntax: if (condition) { code block }
// example: check if a number is positive
const isUserLoggedIn = true;
if (isUserLoggedIn) {
    
}
if (false) {
    
}

// < , > , <= , >=, ==, ===, !=, !== 

if (2 == "2") {
    console.log("2 is equal to 2"); // true

}
if (2 === "2") {
    console.log("2 is equal to 2"); // false
}
if (2 != "2") {
    console.log("2 is not equal to 2"); // false
}

const temprature = 41;
if (temprature < 50) {
    console.log("It's cold outside"); // false
    
} else {
    console.log("It's hot outside"); // true
}
//console.log("temprature is greater than 50"); // true // this will always run


const score = 200;
if (score > 100){
    const power = "fly";
    console.log(`user power : ${power}`); // true
    }
//console.log(`user power : ${power}`); // ReferenceError: power is not defined
// this will not run because power is defined inside the if block

//implicite scope
const balance = 1000;
//if (balance > 500) console.log("test"), console.log("test2");
// this is a single line if statement, no need for curly braces
// this is not recommended for readability and maintainability of the code

if (balance < 500) {
    console.log("less than 500"); // false
    
} else if (balance < 750) {
    console.log("less than 750"); // false
    
} else if (balance < 900) {
    console.log("less than 900"); // false
    
} else {
    console.log("less than 1200"); // true
}

/*******Real Life Example**********/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("allow to buy course"); 
} // && all condition must be true if any one wrong whole code will note execute

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
} // || all or any condition must be true

