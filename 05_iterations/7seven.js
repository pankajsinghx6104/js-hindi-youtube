const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumers.map((num) => {
    return num + 10;
})
console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const newNums1 = myNumers.map((num) => num + 15 );
console.log(newNums1); // [ 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ]


// chaining

const newNums2 = myNumers
                  .map((num) => num * 10)
                  .map((num) => num + 1)
                  .filter((num) => num >= 40)

                  

console.log(newNums2); // [ 41, 51, 61, 71, 81, 91 ] // this will work because we are chaining the methods             
