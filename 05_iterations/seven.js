const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// using map:
// const newNums = myNumbers.map( (num) => {return num + 10})
// console.log(newNums);

// using for each loop:
// const newNums = []
// myNumbers.forEach( (num) => {
//     if (num) {
//         newNums.push(num + 10)
//     }
// }
// )
// console.log(newNums);

const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums);

