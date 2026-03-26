// array

const myArray = [12,23,34,45];
// console.log(myArray);

const myArray2 = new Array(12,23,34,45)
// console.log(myArray2[1]);

// myArray.push(10)
// myArray.push(17)
// myArray.pop()

// myArray.unshift(3)
// myArray.shift()
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(23));

const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);

// slice splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)
console.log("A ", myArray);
console.log("B ", myn1);

const myn2 = myArray.splice(1,3)
console.log("A ", myArray);
console.log("C ",myn2);

// A  [ 12, 23, 34, 45 ]
// A  [ 12, 23, 34, 45 ]
// B  [ 23, 34 ]
// A  [ 12 ]
// C  [ 23, 34, 45 ]




