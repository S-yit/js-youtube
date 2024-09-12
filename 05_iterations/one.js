// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop is ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} Outer loop value: ${i}`);
//     console.log(i + '*' + j + '=' + i * j);
//     }    
// }

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element); 
}


// Break And Continue:

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        // break
        
    }
    console.log(`value of i is ${i}`);
    
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue
        
    }
    console.log(`value of i is ${i}`);
    
}