// Primitive Datatypes
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 345678965236588965n

//Reference Datatypes(Non Primitive):
// 3 types: Array, Objects, functions

//Array
const heros = ["shaktiman","naagraj","doga"]

//Objects
let myObj= {
    name:"Suraj",
    age: 23,
}

//functions
const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
