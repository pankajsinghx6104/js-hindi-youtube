var c = 300
let a = 100
// global scope value is available everywhere
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // c = 30
    console.log("inner" , a); // inner 10
}
//{} // block scope value is not available outside the block


console.log(a); //100//note: a is defined outside the block
//console.log(b); note: b is not defined outside the block
console.log(c); //30 // c is defined outside the block
 


function one(){
    const username = "PAnkaj"

    function two() {
        const website = "google.com"
        console.log(username); // PAnkaj
    }
     
    //two()
    //console.log(website); // website is not defined
   
    two()
    
}
//one()

if (true) {
    const username = "PAnkaj"

    if (username === "PAnkaj") {
        const website = "google.com"
        console.log(username + website); // PAnkajgoogle.com    
        }
   // console.log(website); // website is not defined
    
}

//console.log(username); // username is not defined



// ++++++++++++++++++++ intresting ++++++++++++++++++++++++++++++
addone(5) // there is no error because function declaration hoisted (hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.)

function addone(num) {
    return num + 1
}

//addtwo(5) // there is an error because function expression is not hoisted
const addtwo = function(num) {
    return num + 2
}    // some time we need to use function as a variable is called function expression
addtwo(5)