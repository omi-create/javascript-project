const user = {
    user: "om",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "om"
//     console.log(this.);
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);    
// }
// chai()
// implicite return
// const addTwo = (num1,num2) => num1+num2

const addTwo = (num1,num2) => ({username: "om"})

console.log(addTwo(23,4));

