// reduce 

const myNums = [1, 2, 3];
const myTotal = myNums.reduce(function (acc,currval){
    console.log(`Accumulator: ${acc}, Current Value: ${currval}`);
    return acc + currval;
    
},0); // 0 is the initial value of accumulator
// sabse pehle accumulator ki value 0 hai fir currval ki value 1 hai fir accumulator ki value 1 ho jayegi fir currval ki value 2 hai fir accumulator ki value 3 ho jayegi fir currval ki value 3 hai fir accumulator ki value 6 ho jayegi
// accumulator ki value last mein return hoti hai
console.log(myTotal); // 6
// reduce method is used to execute a function on each element of an array and return a single value

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(sum); // 15

const myTotal2 = myNums.reduce((acc, currval) => acc + currval, 0); // 0 is the initial value of accumulator
console.log(myTotal2); // 6


const shoppingCart = [
    { product: "shoes", price: 100 },
    { product: "shirt", price: 50 },
    { product: "pants", price: 75 },
    { product: "hat", price: 25 },
    { product: "socks", price: 10 },
    { product: "belt", price: 20 },
    { product: "sunglasses", price: 150 },
    { product: "watch", price: 200 },
    { product: "jacket", price: 300 },
    { product: "scarf", price: 15 },
    { product: "gloves", price: 30 },
    {product: "umbrella", price: 40 },
]

const totalPrice = shoppingCart.reduce((acc, currval) => acc + currval.price, 0); // 0 is the initial value of accumulator
console.log(totalPrice); // 1000