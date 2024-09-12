const user = {
    username: "Suraj",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}

// user.WelcomeMessage()
// user.username = "Sam"
// user.WelcomeMessage()
// console.log(this);

//this works in object not in function

// // Normal Function:
// function chai(){
//     let username = "Suraj"
//     console.log(this.username);  
// }
// chai()


// // Another Function:
// const chai = function(){
//     let username = "Suraj"
//     console.log(this.username);   
// }
// chai()

// // Arrow Function:
// const chai = () => {
//     let username = "Suraj"
//     console.log(this); 
// }
// chai()

// // Method One (Explicit Return) 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// // Method Two (Implicit Return)
// const addTwo = (num1, num2) => num1 + num2

// // Method Three (Implicit Return ())
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,4));

// // returning an object
const addTwo = (num1, num2) => ({username: "Suraj"})
console.log(addTwo(3,4));