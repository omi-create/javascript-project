// objests
// Singleton
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full_name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 19,
    location: "Jaipur",
    email: "om@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser.full_name);
// console.log(JsUser[mySym]);

// JsUser.email="om@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email="om@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());


