//singeleton object and through  constructor

//const tinderUser = new Object(); // Singleton object
//console.log(tinderUser);//{} //empty object
const tinderUser = {}; //object literal notation not singleton
//console.log(tinderUser);//{} //empty object

tinderUser.id = "123abc";
tinderUser.name = "pankaj";
tinderUser.isLoggedin = false;

console.log(tinderUser);//{ id: '123abc', name: 'pankaj', isLoggedin: false }
 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "pankaj",
            lastName: "singh"
        }
    }

}

console.log(regularUser.fullname.userfullname.firstName);//pankaj

const obj1 = {
    1: "a",
    2: "b",
};
const obj2 = {
    3: "c",
    4: "d",
};

//const obj3 = { obj1, obj2 }; //nested object
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }  //nested object
//const obj3 = Object.assign( obj1, obj2); //merge two object into one object obj1 will be updated with obj2 values and obj2 will remain same  //shallow copy
const obj3 = Object.assign( {}, obj1, obj2); // {} better syntax for shallow copy

console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj1);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }    //obj1 will be updated with obj2 values and obj2 will remain same

const obj4 = {...obj1, ...obj2}; //spread operator
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "p@gmail.com",

    },
    {
        id: 2,
        email: "m@gmail.com",
    },
    {
        id: 3,
        email: "k@gmail.com",
    },
    {
        id: 4,
        email: "a@gmail.com",
    }
] //array of objects or list of objects or collection of objects 

console.log(users[1].email); //m@gmail.com


console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedin' ] //return array of keys

console.log(Object.values(tinderUser));//[ '123abc', 'pankaj', false ] //return array of values

console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'pankaj' ], [ 'isLoggedin', false ] ] //return array of key value pair

console.log(tinderUser.hasOwnProperty("id"));//true //check if object has property or not

/************************************** */
//object destructuring

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh",
}
// course.courseInstructor // to access the value of courseInstructor many times

//const { courseInstructor } = course; //destructuring object now we can use courseInstructor directly

//console.log(courseInstructor);//Hitesh

const { courseInstructor: instructor } = course; //destructuring object now we can use instructor directly
console.log(instructor);//Hitesh




/*********API and Json ******************** */

//API - Application Programming Interface
//Json - JavaScript Object Notation
//API - is a set of rules and protocols that allows one software application to communicate with another software application
//API - is a software intermediary that allows two applications to talk to each other
//API - is a messenger that takes request and tells the system what you want to do and return the response back to you

//Json - is a lightweight data-interchange format
//Json - is easy for humans to read and write
//Json - is easy for machines to parse and generate

// {
//     "name": "pankaj",
//     "coursename": "Js in Hindi",
//     "price": "free",
// }

[
    {},
    {},
    {},
    {},
]
//in json we can have object or array of objects