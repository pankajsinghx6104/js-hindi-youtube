//let score = "33abc"
// let scope = null;  
let score = "pankaj";

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN (not a number)
// true =>; false => 0


//let isloggedIn = 1
//let isloggedIn = ""
let isloggedIn = "pankaj"
let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "pankaj" => true


let someNumber = 33

let string = String(someNumber)
// console.log(string);
// console.log(typeof string);



//****************OPERATIONS*******************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log( 2+2); // additon operator
// console.log(2-2); // sub operator
// console.log(2*2); // multi operator
// console.log(2**3); // 2 to the power 3
// console.log(2/3); // divide operator
// console.log(2%3); // reminder/Modulo operator

let str1 = "hello"
let str2 = "pankaj"
console.log(str1+str2); //hellopankaj 

console.log("1" + 2 ); //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2); //122 if string is 1st then all conversion will into string
console.log(1 + 2 + "2"); //32  f the string is last then conversion will be done before that then string will be added

console.log((3 + 4) * 5 % 3);


console.log(+true); // 1 hoga increment
console.log(+""); //false +0 ->0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
//console.table([num1, num2, num3])

let gameCounter = 100
//++gameCounter;  Prefix increment
//gameCounter++;  Postfix increment
let pankajCounter = gameCounter++
console.log(gameCounter);
console.log(pankajCounter);


// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion