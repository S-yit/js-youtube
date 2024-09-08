const name = "Suraj"
const repoCount = 50

// console.log(name + repoCount);

// String interpolation
console.log(`My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Suraj')
console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,4) //accept negetive values
console.log(anotherString);

const newStringOne = "    suraj       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://suraj.com/suraj%20yadav"
console.log(url.replace('%20','-'))

console.log(url.includes('suraj')); //to check whether it is present or not

console.log(gameName.split('-'))