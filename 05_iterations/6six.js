// for each never returns aap chahe ya na chahe

const  coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

const values = coding.forEach((item) => {
    console.log(item); // JavaScript Python Java C++ Ruby
    return item;
})

console.log(values); // undefined
// forEach() method does not return anything, it returns undefined

const myNums = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];
const myNewArray = myNums.filter((num) => num > 4);
console.log(myNewArray); // [ 5, 6, 7, 8, 9, 10 ]
// filter() method returns a new array with all elements that pass the test implemented by the provided function
const myNewArray1 = myNums.filter((num) => {
    num > 4
}); // [] //this will not work because we need to return the value in the arrow function bexause it is a block body
// if we use block body then we need to use return statement
console.log(myNewArray1);

const myNewArray2 = myNums.filter((num) => {
    return num > 4; // this will work because we are returning the value
});
console.log(myNewArray2); // [ 5, 6, 7, 8, 9, 10 ]



// if we want to use forEach() method to filter the array then we can do it like this 

const myNewArray3 = [];
myNums.forEach((num) => {
    if (num > 4) {
        myNewArray3.push(num);
    }
})

console.log(myNewArray3); // [ 5, 6, 7, 8, 9, 10 ] // this will work but it is not a good practice to use forEach() method to filter the array
// because it is not returning anything and we are using push() method to add the value in the new array

const books = [
    { title: "Book 1", author: "Author 1", price: 100, genre : "Fiction" }, 
    { title: "Book 2", author: "Author 2", price: 200 , genre : "Non-Fiction" },
    { title: "Book 3", author: "Author 3", price: 300 , genre : "Fiction" },
    { title: "Book 4", author: "Author 4", price: 400 , genre : "Non-Fiction" },
    { title: "Book 5", author: "Author 5", price: 500  , genre : "history" },
    { title: "Book 6", author: "Author 6", price: 600 , genre : "Non-Fiction" },
    { title: "Book 7", author: "Author 7", price: 700 , genre : "Fiction" },
    { title: "Book 8", author: "Author 8", price: 800 , genre : "Non-Fiction" },
    { title: "Book 9", author: "Author 9", price: 900 , genre : "Fiction" },
    { title: "Book 10", author: "Author 10", price: 1000 , genre : "history" }

]

let userBooks = books.filter((bk) => bk.genre === "Fiction" && bk.price < 500);

console.log(userBooks);

userBooks = books.filter((bk) => {
    return bk.price === 1000 && bk.genre === "history";
})

console.log(userBooks); // [ { title: 'Book 10', author: 'Author 10', price: 1000 } ]
