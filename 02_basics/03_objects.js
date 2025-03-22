//singleton whenever constructor is called, it returns the same instance and not in literal notation
//object.create() - create object with prototype

//object literal notation

const mySym = Symbol("Key1");
const JsUser = {
    name: "pankaj",
    "Full Name": "Pankaj Singh Rajput",
    [mySym]: "Key1", //symbol key in object notation
    age: 20,
    location: "Indore",
    email: "pankajsinghx6104@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],
};

console.log(JsUser.email);//pankajsinghx6104@gmail.com
console.log(JsUser["email"]);//pankajsinghx6104@gmail.com

console.log(JsUser["Full Name"]);//Pankaj Singh Rajput {we cant acces this through dot notation}

console.log(JsUser[mySym]); //Key1

console.log(typeof JsUser[mySym]);//symbol

JsUser.email = "pankaj@google.com"; //to chnage the value of email or overwrite the value

//Object.freeze(JsUser); //to make object immutable after this we cant change the value of object

JsUser.email = "pankaj@cwc.com"; //it will not change the value of email
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js Usser");
}
console.log(JsUser.greeting);//[Function: greeting]
console.log(JsUser.greeting());//Hello Js Usser

JsUser.greetingTwo = function () {
    console.log(`Hello Js Usser, ${this.name}`);//Hello Js Usser, pankaj // string interpolation
    console.log(`Hello Js Usser, ${this["Full Name"]}`);//Hello Js Usser, Pankaj Singh Rajput  
}

console.log(JsUser.greeting());//Hello Js Usser
console.log(JsUser.greetingTwo());// Hello Js Usser, pankaj
