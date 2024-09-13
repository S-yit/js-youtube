const coding = ["js", "ruby", "java", "Python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);   
// } )

// coding.forEach( (element) => {
//     console.log(element);
// })

// function printMe(item) {
//     console.log(item);  
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr); 
// } )


const myCoding = [
    {
        languageName: "JavaScript",
        languagefileName: "js"
    },
    {
        languageName: "Java",
        languagefileName: "java"
    },
    {
        languageName: "Python",
        languagefileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})