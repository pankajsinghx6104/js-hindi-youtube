// ES6


class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("pankaj","pankaj@google.com","6104")
console.log(chai) // 
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// BEHIND THE SCENE if not available class facility

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;

}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const Tea = new User("Mansi","mansi@google.com","9083")
console.log(Tea) // 
console.log(Tea.encryptPassword());
console.log(Tea.changeUsername());
