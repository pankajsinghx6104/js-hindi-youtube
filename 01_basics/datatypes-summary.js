/*
JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly
*/

const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 32456456456646534554545666656n
// Primitive
// call by value
// we dont get original data reference we get copy and all changes occur in copy

// 7 types : String,Number, Boolean{true/false}, null{empty}, undefined{not defined},Symbol{used to make any value unique}, BigInt{big values or scientific values}

// Reference type{NON-PRIMITIVE}[reference will be directly allocated in memory]

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "pankaj",
    age: 20,
}

const myFunction = function(){
    console.log("hello wolrd");
    
}
console.log(typeof bigNumber);
console.log(typeof myFunction); //function

console.log(typeof myObj);
console.log(typeof heros); //object

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/