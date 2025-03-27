/**
 * JavaScript Execution Context
 * 
 * [{code file}] => [{global execution context}]=> [{stack}] 
 * 
 * ...Global execution context
 * ...function execution context
 * ...eval execution context // basicallly this is a property of window object global object
 * 
 * 
 * [{code file}] => Memory Creation phase (Memory allocation)
 *               => Execution phase (Code execution)
 *               
 * 
 * 
 * 
 * 
 */
let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
    
}
let result1 = addNum(val1, val2)
console.log(result1) //15
let result2 = addNum(10, 2)
console.log(result2) //12 

/**
 * how the code is executed
 * 
 * 1. Global Execution/Environment [code will run through global execution context and allocation in this.]
 * 
 * 
 * 2. Memory Creation phase (Memory allocation)[val1, val2 => undefined
 * addNum => defination
 * result1 => undefined 
 * result2 => undefined]
 * 
 * 
 * 3. Execution phase (Code execution)
 * [
 * val1 = 10
 * val2 = 5
 * addNum => [new variable environment + execution thread (again 2 phases in function)
 * memory phase => val1 , val2 , total => undefined
 * execution phase => = num1 10,num2 = 5,total = 10 + 5 => 15] after work done that new context will delete and send total to global
 * 
 * result1 => 15 
 * 
 * Result2 => [new variable environment + execution thread (again 2 phases in function)
 * memory phase => val1 , val2 , total => undefined
 * execution phase =>num1 = 10,num2 = 2,total = 10 + 2 => 12] after work done that new context will delete and send total to global
 * ]
 */


//********************************* */

/*
       Call Stack

    first always Global Execution Context will be created
    then
    it will execute (one()) then it will go out and second will arrive (two()) then it will go out and third will arrive (three())
    
     |           |
     |           |
     |           |
     | one()     |
     | Global E. |
     |___________|

    when functions in functions then it will be executed in
    LIFO (Last In First Out)
  
     |           |
     |           |
     | three()   |
     | two()     |
     | one()     |
     | Global E. |
     |___________|
    
 */
