// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})() ; 

// () () //Function Defination  //Execution call

// sometimes global scope pollution creates problem to remove that we use IIFE

( (name) => {
    console.log(`DB Connected Two ${name}`);
    
} ) ("Suraj");