const name = "pankaj"
const repoCount = 50

//console.log(name + repoCount + " value");
// hello world50
// hello world50value
//not good way for codereadabilty

/*****STRING INTERPOLUTION*******/
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //modern way for clean code

//declare string using object 
/*See the Result on console tooo from below command */
const gameName = new String('pankaj-banna-01');

console.log(gameName);//[String:'pankajbanna01']
console.log(gameName[0]); //accesing 0 index key value

console.log(gameName.__proto__); // too see the prototype output=>{}

console.log(gameName.length); //8  //accessing the length of string and we can also acces prototype through this command (value and methods)
console.log(gameName.toString);
console.log(gameName.toString.length);


console.log(gameName.toUpperCase()); //PANKAJBANNA01 this does not change original because its primitive type and stack memory type

// console.log(gameName.prototype); 
/*
1️⃣ Primitive values (like strings) don’t have .prototype
2️⃣ Only constructor functions and classes have .prototype
3️⃣ To check a string's prototype, use Object.getPrototypeOf(gameName)
*/

console.log(gameName.charAt(2)); //too see the character at 2 index no. output => n

console.log(gameName.indexOf('j'));//too see the index of character output => 5

const newString = gameName.substring(0,9) //last value(index) not include //pankajban
//cannot give negative values it will start from 0 
console.log(newString);

const anotherString = gameName.slice(-8,13);//start from back in negative value case
console.log(anotherString);

const newStringOne = "       Kuldeep         "
console.log(newStringOne);
console.log(newStringOne.trim());
//✅ trim() removes spaces from both ends but not in between the string.
//✅ It does not modify the original string (strings are immutable in JavaScript).
//✅ It is useful when handling user inputs, removing unwanted spaces in form fields, etc.

const url = "https://pankaj.com/pankaj%20rajput"

console.log(url.replace('%20','-'));
//https://pankaj.com/pankaj-rajput output

console.log(url.includes('rajput'));//true its is included
console.log(url.includes('kuldeep'));//false not included in string

console.log(gameName.split('a')); //[ 'p', 'nk', 'j-b', 'nn', '-01' ] to
/* 
The split() method is used to divide a string into an array of substrings based on a specified separator. It does not modify the original string.string.split(separator, limit);
*/


const str = "5";
console.log(str.padStart(7, "3")); // '3333335'
console.log(str.padEnd(4, "0")); // '5000'