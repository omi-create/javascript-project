// const tinderUser = new Object() //Singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    full_name: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhart"
        }
    }
}
// console.log(regularUser.full_name.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj3 = {5: "a",6: "b"}

// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "o@gmai.com"
    },
    {
        id: 1,
        email: "o@gmai.com"
    },
    {
        id: 1,
        email: "o@gmai.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);
// Destructuring
// const navbar = (/*probs.company*/ {company}) => {

// }
// navbar(company = "om")

// {
//     "name": "om",
//     "coursename": "js course in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

