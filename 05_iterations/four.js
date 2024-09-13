// forin loop - accessing element from an object
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    sw: 'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); // remember to get values we need to give myObject[key]
}

// forin loop - accessing element from array
const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(programming[key]); // remember to get values we need to give programming[key]
    
}