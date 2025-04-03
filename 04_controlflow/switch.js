// Switch Case
/* Syntax : 
switch (key) {
    case value:
        
        break;

    default:
        break;
} */

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
       break; //Use break in each case to stop extra execution; default doesn’t need it unless it comes before other cases.
    case 5:
        console.log("May");
       break;

    default:
        console.log("default case match");
        
        break;
}