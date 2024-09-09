// Singleton
// Object.create

const mySym = Symbol("key1")

// Object Literals


// for symbol we need to give []

const jsUser = {
    name: "Suraj", // keys are considered as string
    "full name": "Suraj Yadav", // keys are considered as string
    [mySym]: "myKey1", // for symbol we need to give [] or else it will be as strings
    age: 22,
    location: "Jaipur",
    email: "suraj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

console.log(jsUser.email) //object is accessed through dot notation
console.log(jsUser["email"]); //for accessing it is method to give []
// console.log(jsUser."full name");
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "suraj99330@chatgpt.com"
// Object.freeze(jsUser) //The object will be freezed...Inside values could'nt be changed
jsUser.email = "suraj99330@microsoft.com"

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
