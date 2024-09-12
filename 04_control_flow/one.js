// if 

//if true it will get executed if false then that code block won't get executed 

const isUserLoggedIn = true
const temperature = 41

// if(temperature === 41){
//     console.log("Less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }
// console.log("Executed");

//Comparison Operator:
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// // console.log(`User power: ${power}`); // Scope problem

//BASIC IF-ELSE:

const balance = 1000
// // if (balance < 500) console.log("test"),console.log("test"); // will run but it is not a good practice 
// if  (balance < 500) {
//     console.log("less than 500");  
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");   
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to buy course");
} 
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}


