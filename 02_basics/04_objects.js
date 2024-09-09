//declaring of object
// const tinderUser = new Object() //Singleton Object
const tinderUser = {} //nonSingleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Suraj",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}

// const obj3 = {obj1, obj2} // wrong way objects will get saparately merged
// const obj3 = Object.assign({}, obj1, obj2, obj4) // with the help of assign {}
const obj3 = {...obj1, ...obj2, ...obj4} // spread operator same as arrays
// console.log(obj3);


const users = [
    {
    id: 1,
    email: "user@gmail.com"
},
{
    id: 1,
    email: "user@gmail.com"
},
{
    id: 1,
    email: "user@gmail.com"
}
]
console.log(users[1].email)

console.log(tinderUser);

console.log((Object.keys(tinderUser))); //Object.keys
console.log((Object.values(tinderUser))); //Object.values
console.log((Object.entries(tinderUser))); //Object.entries
console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Suraj"
}

//course.courseInstructor

const {courseInstructor: Instructor} = course //destructure
console.log(Instructor);

// APIs
// {
//     "name": "Suraj",
//     "coursename": "js in hindi",
//     "price": "freee"
// }

