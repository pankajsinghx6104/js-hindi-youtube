// for loop
// for loop ka use tab karte hain jab hume pata hota hai ki loop kab khatam hoga
//while loop 
// while loop ka use tab karte hain jab hume nahi pata hota ki loop kab khatam hoga
// do while loop
// we can use do while loop when we want to execute the loop at least once

//WHILE LOOP
//Syntax: while(condition){ // code to be executed }

let index = 0; // initialization
while (index <= 10) { // condition
    console.log(`value of index is ${index}`); // code to be executed
    index = index + 2 ; // increment
}

let myArray = ["flash", "batman", "superman", "wonderwoman", "greenlantern"];
let arr = 0;
while (arr < myArray.length) {
    console.log(myArray[arr]);
    arr++;
}

// DO WHILE LOOP
//Syntax: do{ // code to be executed } while(condition);

let score = 1;
do {
    console.log(`your score is ${score}`);
    score++;
}
while (score <= 10); // condition

// do while loop will execute the code at least once even if the condition is false
// for example
let score1 = 11;
do {
    console.log(`your score is ${score1}`);
    score++;
}
while (score1 <= 10); // your score is 11