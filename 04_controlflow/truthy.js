const userEmail = "pankaj@ai"

if (userEmail) {
    console.log("GOT USER EMAIL");
    
} else{
    console.log("DOnt have User Email");
    
}

// Falsy Value : false , 0 , -0 ,BigInt 0n,"" , null , undefined , NaN
// truthy Value : "0" , 'false' , " " , [] , {} ,function(){}

const User1 = []
const User2 = {}

if (User1.length === 0) {
    console.log("Array is empty");
    
}
if (Object.keys(User2).length === 0) {
    console.log("Object is empty");
    
}

/*
ON CONSOLE
false == 0 // true
false == ''//true
0==''//true
*/

//Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10 // 5
//val1 = null ?? 10 //10
//val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 //10


console.log(val1);

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

