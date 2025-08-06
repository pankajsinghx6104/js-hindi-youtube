class User {
    constructor(email,password){
        this.email = email;
        this.password = password

    }
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}pankaj`
    }
    set password(value){
        this._password = value //seter ko return nhi krte kabhi
    }
}

const pankaj = new User("P@pankaj.ai","abcde")
console.log(pankaj.password) //abcdepankaj
console.log(pankaj.email) // P@PANKAJ.AI