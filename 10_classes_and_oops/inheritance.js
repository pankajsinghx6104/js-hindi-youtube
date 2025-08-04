class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course wasadded by ${this.username}`); 
    }
}

const chai = new Teacher("pankaj","pankaj@google.com","6104")
chai.addCourse()
console.log(chai.addCourse())
chai.logMe() // have accces inheritance

const masalaChai = new User("masalaChai")
//masalaChai.addCourse() // not have access
masalaChai.logMe()
//console.log(chai === Teacher);//false
//console.log(chai === masalaChai);//false

console.log(chai instanceof Teacher);// true
console.log(chai instanceof User);// true
