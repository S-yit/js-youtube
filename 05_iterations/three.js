// for of

// ["", "", ""] //array containing strings
// [{}, {}, {}] //array containing object


// const arr = [1, 2, 3, 4, 5]
// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     if (greet == " "){ //if space detected
//         continue
//     }
//     console.log(`Each char is ${greet}`);
// }

//Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' ,value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObject) { // Not Iterable in this method
//     console.log(key, ':-' ,value);
    
// }