// Reduce

const myNums = [1, 2, 3]

// with normal function readable code
// const myTotal = myNums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )
// console.log(myTotal);

// with arrow function 
// const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0  )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "App Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
