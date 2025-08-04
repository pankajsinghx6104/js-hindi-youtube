// let myName = "Pankaj     ";
// let mychannel = "chai     ";


// console.log(myName.truelength);

let myHeros = ["thor","spiderman"];


let heroPowers = {
    "thor": "thunder",
    "spiderman": "spider-sense",

    getSpiderPower: function (){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}; 

Object.prototype.pankaj = function() {
    console.log(`Pankaj is Present in all objects`);
}
Array.prototype.heypankaj = function() {
    console.log(`Pankaj say Hello`);
}



heroPowers.pankaj(); // This will call the pankaj method from Object prototype
myHeros.pankaj(); // This will also call the pankaj method from Object prototype
myHeros.heypankaj(); // This will call the heypankaj method from Array prototype 

//heroPowers.heypankaj(); // This will not work as heroPowers is not an array, it will throw an error


// INHERITANCE

const User = {
    name:"chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'js assignment',
    fullTime : true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// moder Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiaurCode         "
let MYname = "pankajsss       "

String.prototype.truelengh = function(){
    console.log(`${this}`) // chai aur code 
    console.log(`${this.name}`) //undefined
    console.log(`True length is : ${this.trim().length}`) // 11

}

anotherUsername.truelengh() // chaiaurCode undefined True length is : 11
MYname.truelengh() // pankajsss undefined True length is : 9
"Narutoooo".truelengh() //Narutoooo undefined True length is : 9 