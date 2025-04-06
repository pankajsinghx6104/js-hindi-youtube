// For of loop
// for of loop ka use tab karte hain jab hume array ya object ke elements ko iterate karna hota hai

//["","","",""]
//[{}, {}, {}, {}]
//strings, numbers, objects, arrays, etc.
//syntax: for (const element of iterable) { // code to be executed }

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!";
for (const char of greetings) {
    if (char == " ") {
        continue; // skip the space character
    }
    console.log(`each character is ${char}`);
   
}

// Map
//A Map is a built-in object in JavaScript that allows you to store key-value pairs, where keys can be of any data type (not just strings like in regular objects).

// Why use Map?
// 1. Key Types: Maps can use any data type as keys (objects, functions, etc.), while objects only use strings or symbols as keys.
// 2. Order: Maps maintain the insertion order of keys, while objects do not guarantee any specific order.
// 3. Size: Maps have a built-in size property, while you need to calculate the size of an object manually.
// 4. Iteration: Maps can be iterated in the order of insertion, while objects do not guarantee any specific order of iteration.
// 5. Performance: Maps are generally more efficient for frequent additions and removals of key-value pairs.
// 6. Methods: Maps have useful methods like set(), get(), has(), delete(), and clear() for managing key-value pairs.
// 7. Object Methods: Maps do not inherit properties from Object.prototype, so they do not have default methods like toString() or hasOwnProperty().
// 8. Use Cases: Maps are often used when you need to manage collections of data with unique keys, while objects are more suitable for simple key-value pairs or when keys are known in advance.

const map = new Map()
map.set("IN", "India") 
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("IN", "India") // unique key, so it will not be added again


console.log(map); // Map(3) { 'IN' => 'India', 'US' => 'United States', 'UK' => 'United Kingdom' }
console.log(map.get("IN")); // India


for (const key of map) {
    console.log(key); // [ 'IN', 'India' ] [ 'US', 'United States' ] [ 'UK', 'United Kingdom' ]  
}

for (const [key, value] of map) {
    console.log(`key is ${key} and value is ${value}`); // key is IN and value is India key is US and value is United States key is UK and value is United Kingdom
}

const myObject = {
    game1: "cricket",
    game2: "football",
    game3: "hockey",
}

for (const [key , value] of myObject) {
    console.log(`key is ${key} and value is ${value}`); // TypeError: myObject is not iterable
}
