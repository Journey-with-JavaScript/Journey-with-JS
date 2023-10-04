/* ---------------------- Arrays --------------------
- Non primitive data type
- special type of object
- it holds multiple values/elements
- values can be string, number, object, variable


var text = 'apple'
var num = 23
var num2 = 24

var myArray = [23, 24, 435, 45435, 345, 'text', num ]

- sign: []
- new keyword: new Array() // not often used
- Index: 0, 1, 2, 3, 4......

*/

//--- Access Array elements:

// var myArray =  ['Apple', 'Banana', 'Cat', 'Dog', 'Eagle'] //

// console.log(myArray[1])


//--------- changing array elements ----------\\

// myArray[2] = 'Coconut'

// console.log(myArray)

//---------- Access first & last elements ------------\\

// console.log(myArray[0]) //normal

// console.log(myArray[myArray.length - 1])   //last index = total length - 1 (n-1)


//-------------------- Array Methods ---------------\\

// 1. Length 
// 2. toString() / join('param')
// 3. push()
//      - used to add new elements to an array
//      - adds new element in the last index

var myArray =  [ 'Apple', 'Banana', 'Cat', 'Dog', 'Eagle'] 

// myArray.push('Frog', 34)



// 4. pop()
//      - used to removes elements from an array
//      - it removes from last index

// myArray.pop()
// myArray.pop()
// myArray.pop()

// console.log(myArray)  //

// 5. unshift()
//        - add new elements in the first index

myArray.unshift('Frog', 123, 'Hello')


// console.log(myArray)  //

// 6. shift()
//      - removes a element from first index

myArray.shift()
myArray.shift()
myArray.shift()

// console.log(myArray)

// 7. concat()
//      - creates a new array by merging existing array
//      - It can takes string, number an other data types as new array elements.

// var myArray1 = ['A', 'B', 'C']
// var myArray2 = ['D', 'E', 'F', 'G']

// var result = myArray1.concat(myArray2, 'H', 'I', 56, 9, ['Apple', 212])

// console.log(result)

// 8. Flat()
//      - used to flattering an array
//      - flattering is the process of reducing the dimension of arrays
//      - creates a new array

var myNumbers = [['Apple', 1], [5, 'Banana', ['Cat', 4]]]

var result = myNumbers.flat()

// console.log(result)


// 9. slice()
// - 

// var letters = ['A', 'B', 'C', 5, 'E', ['D']]

// var output = letters.slice(3)  //index 3 to last index

// var output = letters.slice(2, 5)  //param: 2 <= output < 5
// console.log(output)


// 10. splice()


var myLetter = ['A', 'B', 'C', 'D']

// var myOutput = myLetter.splice(2, 0, 'E', 'F')   
                    //1st param: index of adding or removing elements in specific position (Number)
                    //2nd param: define how many element should be removed (Number)
                    //3rd and rest: new elements....


myLetter.splice(0, 1)


// console.log(myLetter) 


//-------------------- Changing Array Elements ----------\\

// index: 0, 1, 2....

// var fruits = ['Apple', 'Ball', 'Cat', 'Dog']

// fruits[2] = 'Coconut'




//------------------ Array delete() --------------\\
// delete leave undefined holes in array

// pop(), shift(), splice() does not leave undefined holes in array 
// delete fruits[2]

// console.log(fruits.length)

//Waring: not recommended to use delete()