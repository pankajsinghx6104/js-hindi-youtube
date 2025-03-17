// ARRAYS IN JAVASCRIPT
// Arrays are used to store multiple values in a single variable.
// JavaScript arrays are resizable. and can hold different types of elements.

//const myArr = [1, 2, 3, 4, 5, true, "pankaj"];//u can declare any type of data in the array
const myArr = [0,1, 2, 3, 4, 5];
console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
console.log(myArr[0]);//0
console.log(myArr[1]);//1

const myHeroes = ["spiderman", "ironman", "Thor", "Hulk", "captain america"];
const myArr2 = new Array(1, 2, 3, 4, 5);

//Array Methods
//push() - add an element at the end of the array
//pop() - remove an element from the end of the array
//shift() - remove an element from the start of the array
//unshift() - add an element at the start of the array (time consuming)
myArr.push(6);
console.log(myArr);//[ 0, 1, 2, 3, 4, 5, 6 ]
myArr.push(7);
console.log(myArr);//[ 0, 1, 2, 3, 4, 5, 6, 7 ]
myArr.pop();
console.log(myArr);//[ 0, 1, 2, 3, 4, 5, 6 ]
myArr.shift();
console.log(myArr);//[ 1, 2, 3, 4, 5, 6 ]
myArr.unshift(0);
console.log(myArr);//[ 0, 1, 2, 3, 4, 5, 6 ]

console.log(myArr.length);//7
console.log(myArr.indexOf(3));//3
console.log(myArr.indexOf(7));//-1 this means the element is not present in the array
console.log(myArr.includes(3));//true (boolean value)

const newArr = myArr.join();//join() - join the elements of an array into a string
console.log(newArr);//0,1,2,3,4,5,6
const newArr1 = myArr.join("");//0123456
const newArr2 = myArr.concat(myArr2); //concat() - merge two arrays
console.log(newArr2);//[ 0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5 ]

//slice() - slice the array from the given index and return the new array
//splice() - remove the elements from the given index original array will be modified

console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5, 6 ]
const myn1 = myArr.slice(1,3); //1,2


console.log("B ", myArr); //A  [ 0, 1, 2, 3, 4, 5, 6 ]
const myn2 = myArr.splice(1,3); //1,2,3
console.log(myn2); //[ 1, 2, 3 ] 


console.log("C ", myArr); //C  [ 0, 4, 5, 6 ] 
