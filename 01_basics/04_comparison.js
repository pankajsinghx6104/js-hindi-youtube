// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2">1); //true; string converted to number
console.log("02">1);//true;---

// no predectable result in comparison between two diffrent datatypes;
console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true

/**
the reason is that an equality chck == and comparison 
><>=<= work differently.
comparispns convert null to a number treating a 0.
thats why(3) null >= 0 os true and (1)null > 0 is false
 */

console.log(undefined == 0);  //false har case me 3 ke 
//avoid this conversion or comparison as much as possible



// ===

console.log(2 == 2); //true 
console.log("2" === 2); //false {also check the datatype before comparison strictly equal too}
console.log("2" == 2); //true {converted the string to number}


