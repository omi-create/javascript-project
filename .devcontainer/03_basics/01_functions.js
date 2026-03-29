function addition(a,b){
    c=a+b
    return c
}

sum = addition(12,1)
// console.log(sum);

function addition(a,b){
    console.log(a+b);
}
addition(12,1)

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calsulateCartPrice(200,400,500))

const user = {
    username: "om",
    price: 123
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));



