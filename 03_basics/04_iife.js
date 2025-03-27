// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed immediately after it is created. 

(function chai() {
   console.log(`DB CONNECTED`);
      
}()) ;//DB CONNECTED //IIFE ()() //semicolon is required //named iife

( () =>{
    console.log(`DB CONNECTED`);
})();

( (name) =>{
    console.log(`DB CONNECTED two ${name}`);
})("pankaj");