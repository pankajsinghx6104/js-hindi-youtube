// for
// Syntax
// for (initialization; condition; increment/decrement) { 
//     // code block to be executed
// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// } 
// intialise hoga fir condition check hoga fir scope ke andar jayega fir increment hoga fir condition fir scope fir increment hoga fir condition fir scope

for (let i = 0; i <= 10; i++) {
    const element = i ;
    if (i == 5) {
        console.log("5 mil gaya bhai");
        break; // loop ko break karne ke liye

    }
    console.log(element);
    
}

// console.log(element); // ReferenceError: element is not defined

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);
    
    for (let j = 0; j <=10; j++) {
      //  console.log(`Inner loop: ${j} and inner i: ${i}`);
        console.log(i + '*' + j + '=' + i * j);
        

    // phle outer loop chalega
    // fir inner loop chalega   
    // fir inner loop khatam hoga fir outer loop chalega
    // fir inner loop chalega fir outer loop chalega
    // 0  fir 10 bar inner loop chalega
    // 1 fir 10 bar inner loop chalega
    // 2 fir 10 bar inner loop chalega
    }
    
}

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) { 
    // index++ if index++ nho to infinite loop chalega
    const element = myArray[index];// index <= myArray.length // undefined ho jayega
    console.log(element);
    console.log(index); // index bhi dekh sakte hain 
    
}

// break and continue
// break se loop ko break(stop) kar sakte hain
// continue se loop ko skip kar sakte hain

for (let i = 0; i <= 20 ; i++) {
    if (i == 5) {
        console.log("5 is DETECTED bhai");
        break; // loop ko break karne ke liye
    }
    console.log(`Value of i is: ${i}`);

    
}
for (let i = 0; i <= 20 ; i++) {
    if (i == 5) {
        console.log("5 is DETECTED bhai");
        continue; // loop ko skip karne ke liye
    }
    console.log(`Value of i is: ${i}`);

    
}
