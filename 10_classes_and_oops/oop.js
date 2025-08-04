const user = {
    username: "Pankaj",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`);
        console.log(this)
    }

}

console.log(user.username);
console.log(user.getUserDetails());// Output: Username: Pankaj, Login Count: 8, Signed In: true // { username: 'Pankaj', loginCount: 8, signedIn: true, getUserDetails: [Function: getUserDetails] }(this refers to the user object)


console.log(this); // Output: {} (in a browser, it would be the global window object)

function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.greeting = function() {
        console.log(`Hello ${this.username} welcome back!`);
    }

    return this;
    }

//const userOne = User("Pankaj", 8, true);
//const userTwo = User("John", 5, false);

//console.log(userOne); // overwrite the global object with userOne

const userOne = new User("Pankaj", 8, true);
const userTwo = new User("John", 5, false);

console.log(userOne.constructor); // Output: [Function: User] (the constructor function for userOne)
// instanceof checks if an object is an instance of a specific constructor
console.log(userOne instanceof User); // Output: true (userOne is an instance of User
console.log(userTwo);
