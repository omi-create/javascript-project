for(let index = 0; index<=10; index++){
    const element = index;
    if(element == 5){
        // console.log("5 is a best number");
    }
    // console.log(element);
}
// for(let i=0;i<=10;i++){
//     console.log(`Outer loop ${i}`);
//     for(let j = 0;j <= 10 ; j++){
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
//     }
// }

// const arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hello world";
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of Ameraica")
map.set('Fr',"Freance")

// for(const [key, value] of map){
//     console.log(key, ':-',value);
// }

const myObject ={
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const coding = ["js","sql","rb","py","java","cpp"]

// for(const key in programming){
//     console.log(programming[key]); 
// }

// coding.forEach(function (val){
//     console.log(val);  
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "py"
    },
    {
        languagename: "sql",
        languagefilename: "sql"
    },
]

// myCoding.forEach( (item) => {

//     console.log(item.languagename);
    
// } )

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

// <----------------- FILTERS --------------------->

// const myNums = [1,2,3,4,5,6,7]

// const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     return num>4
// } )

// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


// const userBooks = books.filter ( (bk) => bk.genre === 'History' )

// console.log(userBooks);

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map( (num) => { return num+10} )

// const newNums = myNumbers.map((num) => num* 10)

// ---------------------- CHAINING ------------------------

// const newNums = myNumbers
//                 .map( (num) => num*10 )
//                 .map( (num) => num+1)
//                 .filter( (num) => num>=40 )

// console.log(newNums);

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// }, 0)

const myTotal = myNums.reduce( (acc,currval) => acc+currval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "sql course",
        price: 3999
    },
    {
        itemName: "dsa course",
        price: 2999
    },
]

const pricetopay = shoppingCart.reduce( (acc,item) => acc + item.price, 0 )

console.log(pricetopay);



