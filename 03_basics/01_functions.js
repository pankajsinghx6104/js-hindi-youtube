// Functions 

function sayMyName(){
    console.log("p");
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("a");
    console.log("j");
} //function declaration
//sayMyName// reference
sayMyName(); //p a n k a j //execution

function addtwoNumbers(number1, number2){
    console.log(number1 + number2);
} //function declaration with parameters number1 and number2 are parameters
addtwoNumbers(); //NaN //function call without arguments
addtwoNumbers(10, 20); //30 //function call with arguments 10 and 20
addtwoNumbers(3,"4"); //34 //function call with arguments 3 and "4" //type coercion
addtwoNumbers(3,"pankaj"); //3pankaj //function call with arguments 3 and "pankaj" //type coercion

//const result = addtwoNumbers(3, 5); //8 //function call with arguments 3 and 5 //return value

//console.log("Result :" ,result); //Result : undefined //return value of function is undefined

//console.log(addtwoNumbers(3, 5 , 7)); //8 //function call with arguments 3 and 5 //extra argument 7 will be ignored
/**************/


function addtwoNumbersWithReturn(number1, number2){
    // let result = number1 + number2;
    // return result; //return statement after this line code will not be executed
    return number1 + number2; //return statement with expression

    console.log("This will not be printed");//dead code after return statement
}

const result = addtwoNumbersWithReturn(3, 5);
console.log("Result :" ,result); //Result : 8

/**************/

function loginUserMessage(username = "pankaj"/**default value*/){
    // if (username === undefined) {
    //     console.log("Please Enter Username");
    //     return   
    // }
    if (!username) {
        console.log("Please Enter Username");
        return   
    }
    return `Welcome ${username}`;

}
//console.log(loginUserMessage("pankaj")); //Welcome pankaj // without console.log it will not print the value

console.log(loginUserMessage("PANKAJ")); //Welcome PANKAJ

console.log(loginUserMessage("")); //Welcome  //empty string
console.log(loginUserMessage());//Welcome undefined //undefined

function calculateCartPrice(...num1){
    return num1
} //... is rest operator it will take all the arguments and put them in an array

console.log(calculateCartPrice(1,2,3,4,5,6,7,8,9,10)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function calculateCartPrice2(num1, num2, ...num3){
    return num3
}
console.log(calculateCartPrice2(1,2,3,4,5,6,7,8,9,10)); //[ 3, 4, 5, 6, 7, 8, 9, 10 ]

const user = {
    id: "Mansi",
    email: "mansi@gmail.com",
}

function handleObject(anyobject){
    console.log(`User Id : ${anyobject.id} and Email : ${anyobject.email}`);
    
}

//handleObject(user);//User Id : Mansi and Email :
handleObject({
    id: "Pankaj",
    email: "pankaj@gmail.com"
}); //User Id : Pankaj and Email :

const myNewArray = [1,2,3,4,5,6,7,8,9,10];

function returnSecondValue(getArray){
    //return getArray[1];
    return `Second Value : ${getArray[1]}`;
}
//console.log(returnSecondValue(myNewArray)); //Second Value : 2
console.log(returnSecondValue([100,200,300,400])); //Second Value : 200
