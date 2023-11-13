//Traditional function

// function add(x, y){
//     const result = x + y
//     return result
// }

// const myResult = add(2, 3)

// console.log(myResult)


//Arrow function

const add = (x, y) =>  (x + y)

console.log(add(2, 4))




//Spread Operator

const arry1 = ['a' , 'b', 'c']

const arry2 = ['d' , 'e', 'f']


const newArray = [...arry1, ...arry2, 'z', 't']

console.log(newArray)

const obj1 = {address: 'my address', postcode: 223}

const obj2 = {firstName: 'Rahim', email: 'rahim@gmail.com'}

const newObj = {...obj1, ...obj2}

console.log(newObj)