const promiseOne = new Promise(function(resolve, reject) {
    //Do an aync task
    //DB call, API call, etc.
    //cryptography,network etc.
  setTimeout(function(){
    console.log('Async task completed');
    resolve();
  }, 1000);
});

promiseOne.then(function() {
  console.log("Promise consumed");
});

/********************/

new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("Async task 2 completed");
      resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 is resolved");
})


/********************* */


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Pankaj", email: "pankaj@example.com"});
    },1000)
});

promiseThree.then(function(user){
    console.log(user);
})


/********************** */


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
    if(!error){
        resolve({username: "Pankaj", password: "123"});
    }else{
        reject("Error: Something went wrong");
    }
},1000);
});

promiseFour.then((user)=>{
    console.log(user);
    return user.username;       
}).then((username)=>{
    console.log("Username is: " + username);
}).catch((err) => {
    console.error(err);
}).finally(() => {
    console.log("Promise chain completed");
});


/************************* */



const promiseFive = new Promise(function(resolve,reject){
      setTimeout(function(){
        let error = true
    if(!error){
        resolve({username: "JavaScript", password: "123"});
    }else{
        reject("Error: JS went wrong");
    }
},1000);


})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

/********************** */

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://randomuser.me/api/");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error: " + error);
//     }

// } 
// getAllUsers();

fetch('https://randomuser.me/api/')
    .then((response) => {return response.json()})
    .then((data) => {console.log(data)})
    .catch((error) => {console.log("Error: " + error)});
