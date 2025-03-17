const marvel_heros = ["thor", "ironman","spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  aray inside array array take single element
console.log(marvel_heros.length);//4
console.log(marvel_heros[3]);//[ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][1]);//flash

const  allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ], 'superman', 'flash', 'batman' ] concat() - merge two arrays return new array

//spread operator - ...

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] spread operator - merge two arrays return new array and also not have limitation of array inside array means we can merge multiple arrays

//flat() - flat the array
const another_array = [1, 2, 3,[4, 5, 6], 7,[ 6, 7,[ 4, 5]]];
console.log(another_array);//[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]
const flat_array = another_array.flat(Infinity);
console.log(flat_array);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("pankaj"));//false
console.log(Array.from("pankaj"));//[ 'p', 'a', 'n', 'k', 'a', 'j' ] convert string into array

console.log(Array.from({name: "pankaj"}));   //[ {} ] convert object into array (intresting) we have to tell the key name in the object
 
let score1 = 100;
let score2 = 200;
let score3 = 300; 

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]




