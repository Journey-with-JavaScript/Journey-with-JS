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
9. keys()
10. entries()
11. IndexOf() & lastIndexOf()
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

console.log(findApple)