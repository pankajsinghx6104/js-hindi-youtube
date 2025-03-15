// single moment in time january 1 se 

//TC39 tempral api hai to future me date jo hai to temporal api ko global object ban degga 

//DATE

let myDate = new Date()
console.log(myDate);//2025-02-20T11:02:47.179Z

console.log(myDate.toString());//Thu Feb 20 2025 16:34:12 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());//Thu Feb 20 2025

console.log(myDate.toJSON());//2025-02-20T11:09:45.907Z

console.log(myDate.toLocaleString());//20/2/2025, 4:39:45 pm

console.log(myDate.toLocaleTimeString());//4:41:49 pm

console.log(myDate.toISOString() );//2025-02-20T11:11:49.896Z

console.log(typeof myDate); //object


//months start from 0 in js
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);//2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5 , 3)
console.log(myCreatedDate2.toLocaleString());//23/1/2023, 5:03:00 am

let myCreatedDate3 = new Date("2024-01-16")//yyyy-mm-dd
console.log(myCreatedDate3.toLocaleString());//16/1/2024, 5:30:00 am

let myCreatedDate4 = new Date("02-19-2019");//mm-dd-yyyy
console.log(myCreatedDate4.toLocaleString());//19/2/2019, 12:00:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp);//1645337320000
console.log(myCreatedDate.getTime());//1674442200000
console.log(Date.now()/1000);//1645337320); divide by 1000 to get the seconds

console.log(Math.floor(Date.now()/1000));//1645337320 sometimes it come in the decimal so we use math.floor to get the exact value

let newDate = new Date();
console.log(newDate);//2025-02-20T11:02:47.179Z
console.log(newDate.getMonth());//1 time is in the month of feb so it will return 1 many properties like getFullYear, getHours, getMinutes, getSeconds, getMilliseconds, getDay, getDate, getMonth, getTimezoneOffset

// '${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}' for the date format
// '${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}' for the time format

newDate.toLocaleString('default', {month: 'long'});//February tolocalstring has special properties like month, day, year, hour, minute, second, weekday and formatMatcher how you want to display the date










