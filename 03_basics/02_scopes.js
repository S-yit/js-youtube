// var c = 300      //Global Scope
let a = 300
if (true) {      //Blocked Scope
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner:", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

//"var" written in blocked scope is always considered more than Global that is why we use "let" instead of "var"

//remember icecream eg. i.e. child can ask icecream from elders but elders can't 
function one(){
    const username = "Suraj"
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true) {
    const username = "Suraj"
    if (username == "Suraj") {
        const website = "Youtube"
        console.log(username + website);
        
    }
    // console.log(website); //out of the scope
    
}
// console.log(username); //out of the scope


// ==============================Intresting=================================================


console.log(addone(5));

function addone(num){
    return num + 1
}
// in this case function calling is possible before function declaration



//Concept of Hoisting


const addtwo = function(num){  //fuction stored in a variable both syntax are correct
    return num + 2
}

addtwo(5) // in this case function calling is not possible before function declaration