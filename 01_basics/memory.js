// Stack(Primitive)(copy in stack memory), 
 // Heap(Non-Primitive)(original reference in heap memory)

 let myYoutubename = "hiteshchoudharydotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"
 
 console.log(myYoutubename); //hiteshchoudharydotcom
 console.log(anothername);//chaiaurcode
 
 let userOne = {
     email: "user@google.com",
     upi: "user@ybl"
 }
 
 let userTwo = userOne //refere
 
 userTwo.email = "hitesh@google.com"
 
 console.log(userOne.email);//hitesh@google.com
 console.log(userTwo.email);//hitesh@google.com
 