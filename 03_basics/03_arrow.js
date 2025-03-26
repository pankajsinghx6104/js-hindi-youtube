const user = {
  username: "Pankaj",
  price: 999,

  welcomeMessage: function () {
    console.log( `${this.username} , welcome to our website`);
    console.log(this); //this will refer to the current object
    
  } //this keyword is used to access the object properties refer the current object

}

user.welcomeMessage(); //Pankaj , welcome to our website 
user.username = "Mansi"; 
user.welcomeMessage(); //Mansi , welcome to our website

console.log(this); //empty object //this will refer to the global object in nodejs and window object in browser

function chai(){
    let username = "Kuldeep"
    console.log(this.username); //undefined //this will refer to the global object in nodejs and window object in browser
}

chai()

const chai2 = () /* Arrow Function */ =>{
    let username = "Kuldeep"
    console.log(this);
} 
chai2()

//Arrow function does not have its own this keyword it will refer to the parent object

const addtwo = (num1 , num2) => {
  return num1 + num2
}

console.log(addtwo(3,4)); //7
// Output: 

//implicitly return
const addtwo2 = (num1 , num2) => num1 + num2
const addtwo3 = (num1 , num2) => (num1 + num2)
console.log(addtwo3(3,4)); //7
// Output: 7

console.log(addtwo2(3,4)); //7
// Output: 7

const addtwo4 = (num1 , num2) => ({username: "Pankaj"})
console.log(addtwo4(3,4)); //{ username: 'Pankaj' }