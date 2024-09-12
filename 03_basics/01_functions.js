// Functions

// function sayMyName(){
//     console.log("S");
//     console.log("U");
//     console.log("R");
//     console.log("A");
//     console.log("J");
// }
// sayMyName()

// function addTwoNos(number1, number2){ //Parameter
//     console.log(number1 + number2);
    
// }
function addTwoNos(number1, number2){ //Parameter
    // let result = number1 + number2 //1st method of returning 
    // return result
    return number1 + number2   //2nd method of returning
    
}
addTwoNos(3, 5) //Arguments

const result = addTwoNos(3, 5)
console.log("Result: ",result);


function loginUserMessage(username){
    if(username === undefined){ // or if(!username){} same
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

const message = loginUserMessage("Suraj") //method 1
console.log(message);
//OR WE CAN DIRECTLY PRINT
console.log(loginUserMessage("Suraj"));

console.log(loginUserMessage()); //undifined just logged in

function calculateCartPrice(...num1){ //Rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Suraj",
    email: "suraj@gmail.com",

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and email is ${anyobject.email}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    email: "sam@gmail.com"
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // OR we can directly pass array as like object