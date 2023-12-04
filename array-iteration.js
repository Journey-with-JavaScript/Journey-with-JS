//---------------Array Iteration-------------\\
/*
- process of repetition
- iteration methods runs/works on each elements of an array and do something based on condition/test case



1. forEach()
2. map() & flatMap()
3. find() & findIndex()
4. filter()
5. reduce() & reduceRight()
6. every()
7. some()
8. from()
11. IndexOf() & lastIndexOf()
9. keys()
10. entries()
12. includes()

*/

//1. forEach()

//syntax:

/*

    function myFunction(value, index, array){
        console.log(value, index, array)
    }

    myArray.forEach(myFunction)


*/

const myArray = [34, 12, 67, 39, 20]

// function myFunction(value, index, array){
//     console.log(value, index, array)
// }

// const myFunction = (value, index, array) => {
//     console.log(value, index, array)
// }


// () => {}  //anonymous function/callback function with arrow syntax

// function (){}  //anonymous function/callback function with traditional function

// const result = myArray.forEach( function (){} )


const result = myArray.forEach((value, index, array) => {
    // console.log(value, index, array)
})


const numbers = [1, 2, 3, 4, 5]

//2. map()

const newArray = numbers.map((value, index, array) => {
    return value * 2  // [2, 4, 6, 8, 10]
})

// console.log({old:numbers, new: newArray})

const numbers2 = [1, 2, 3, 4, 5, [7, 10, 11]]

//flatMap()

const newArray2 = numbers2.flatMap((value, index, array) => value)

// console.log(newArray2)


//3. find() & findIndex()

const studentAges = [18, 9, 26, 8, 11, 12, 22, 34, 29, 12]

const findElement = studentAges.find((age) => age > 100)


// findIndex()

const fruits = ['Apple', 'Banana', 'Orange', 'Apple']

const findFruitIndex = fruits.findIndex((fruit) => fruit === 'Orange')



// filter 
// return multiple element from an array based on condition or test case

const findAdult = studentAges.filter((age) => age >= 18)


const findApple = fruits.filter((fruit) => fruit === 'Apple')

// console.log(findApple)


//Reduce

const myNumbers = [4, 7, 5, 2, 6]

const total = myNumbers.reduce((accumulator, value, index, array)=> {
    // console.log(accumulator, value)
    return accumulator + value
}, )

// console.log(total)

//with initial value
//1st
//acc = 0 //initial value. if not set, initial value = myNumbers[0]
//value = 4

//2nd
//acc = 4+0=4, value = 7
//3rd
//acc = 4+7=11, value = 5

//4rth
//acc = 11+5=16, value = 2

//5th
//acc = 16+2=18, value = 6

//6th
//acc = 18+6=24

//return 24






//without initial value
//acc = 1  initial value = myNumbers[0]
//value = 2


//Note: reduce method iterates from left to right considering array elements

//reduceRight()
//-- same as reduce but iterates from right to left

//6. every()

const myNumbers2 = [4, 1, 8, 9, 10]

const matchedEvery = myNumbers2.every((value, i, a) => value > 10)

// console.log(matchedEvery)


//7. some()

const matchedSome = myNumbers2.some((value, i, a) => value >= 10)

// console.log(matchedSome)


//8. Array.from()

const myString = 'ABCDEFGH'

const primeNumbers = [1, 2, 3 , 4]

const myNewArray = Array.from(primeNumbers, (value) => value + 1)

// console.log(myNewArray)

//9. indexOf()  & lastIndex()

const myFruits = ['Apple', 'Banana', 'Orange', 'Jackfruit']

const outputFruit = myFruits.indexOf('Banana')

// console.log(outputFruit);

//10. keys()

// const myArrKeys = myFruits.keys()

// console.log([...myArrKeys])

//11. entries()

const myArrEntries = myFruits.entries()

// console.log([...myArrEntries])


//12. includes

console.log(myFruits.includes('Jackfruit'))


//W3 Schools/MDN: array reference
//Do more practice
//Problem solving

//Array at() : 2022