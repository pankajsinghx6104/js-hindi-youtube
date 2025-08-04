class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
    static createId(){
        return '123'
    }
}

const hitesh = new User("hitesh")
//console.log(hitesh.createId()) // not have acces due to static 

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email= email;
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone)
iphone.logMe();
console.log(iphone.createId())//not have acces even child due to static
