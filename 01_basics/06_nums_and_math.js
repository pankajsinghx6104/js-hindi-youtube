const score = 400 
console.log(score);

const balance = new Number(100) //explicitly define number //[Number: 100] specially number
console.log(balance);

console.log(balance.toString());
console.log(typeof balance.toString());
console.log(balance.toString().length);// string length 3 
console.log(balance.toFixed(3)); //100.000 property of number
//const otherNumber = 123.8966 // 124
//const otherNumber = 23.8966 // 23.9
const otherNumber = 1123.8966 // 1.12e+3

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en'));//1,000,000

console.log(hundreds.toLocaleString('en-IN'));//10,00,000

/*********************MATHS*********************/

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4));// 4 //positive will remain positive
console.log(Math.round(4.3));//4 //round off
console.log(Math.round(4.6));//5 //round off
console.log(Math.ceil(4.2));//5 round off to top value just little bit of more than 4 then its 5
console.log(Math.floor(4.9));//4 round of to low value
console.log(Math.sqrt(25)); //Square Root 
console.log(Math.min(4,5,6,3,2)); //2 for minimum value in array or anything
console.log(Math.max(4,5,6,3,2)); //6 for maximum value in array or anything
console.log(Math.random());//0.7286828540796699
//0.5620735397785044 
//value comes between 0 to 1 only

console.log((Math.random()*10 )+ 1); // for range 0  to 10 and +1 for 1 to 10

console.log(Math.floor(Math.random()*10 )+ 1);// if we need small values we can wrap up with floor + roundoff


const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1))+min);










