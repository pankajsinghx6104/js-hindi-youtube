const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// foreach loop
// forEach() method is used to execute a function on each element of an array
// Syntax: array.forEach(function(currentValue, index, arr), thisValue)
coding.forEach( function (val){
    console.log(val); // JavaScript Python Java C++ Ruby
})
coding.forEach((val)=>{console.log(val)}); // JavaScript Python Java C++ Ruby

function printMe(item){
    console.log(item);
}
printMe("jnnjknnkm")

coding.forEach(printMe); // JavaScript Python Java C++ Ruby


coding.forEach((val, index, arr) => {
    console.log(`Value: ${val}, Index: ${index}, Array: ${arr}`); // Value: JavaScript, Index: 0, Array: JavaScript,Python,Java,C++,Ruby
} )

const myCoding = [
    { name: "JavaScript", rating: 5 },
    { name: "Python", rating: 4 },
    { name: "Java", rating: 3 },
    { name: "C++", rating: 2 },
    { name: "Ruby", rating: 1 }

]

myCoding.forEach((item) => {
    console.log(`Name: ${item.name}, Rating: ${item.rating}`); // Name: JavaScript, Rating: 5
    // Name: Python, Rating: 4
    // Name: Java, Rating: 3
    // Name: C++, Rating: 2
    // Name: Ruby, Rating: 1
})
