//----------Spread operator------------\\

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const finalArray = [...array1, ...array2]



const personalInfo = {name: 'John Doe', age: 22}
const guardianInfo = {father: 'Rahim', address: ''}

const studentInfo = {...personalInfo, ...guardianInfo}

// console.log(studentInfo)


//----------Destructuring Assignment------------\\

//1. array destructuring:

    const fruits = ['Apple', 'Banana', 'Orange']

    //before

    // const first = fruits[0]
    // const second = fruits[1]
    // const third = fruits[2]


    //after
    // const [myFav1,f, c, ...rest] = fruits


    // console.log(myFav1, rest)

//1. object destructuring:

const person = {userName: 'John Doe', age: 22, email: 'john@gmail.com'}

    //before:
    // const userName = person.name
    // const userAge = person.age
    // const userEmail = person.email


    //after

    // const {userName, email: anything, age: userAge} = person

    //using rest operator

    const {age, ...rest} = person

    console.log(age, rest)