// -------------------------------Loops--------------------------------

/*
1. for loop
- for()
- for in (object)
- for of (array)

2. while
- while
- do while


Syntax:

    for (exp1; exp2; exp3){
        task.....
    }

*/
// let num = 1;

// for (num; num <= 10; num++){
//     // console.log('Your num is:', num)
// }

//------------- for in loop ---------------\\

//- used to loops through the properties of an objects
//- for loop iterates over a object key

/*
syntax:

    for(key in myObject){
        task/code.....
    }

    for(element in student){
        console.log(element)
    }

*/

var student = {
  name: "John Doe",
  id: "2016-1-40009",
  class: 12,
  section: "A",
  addresses: { present: "", permanent: "", postcode: 34567 },
  hobbies: ["Football", "Gardening", "Book Reading"],
  isRegular: true,
  coCurricularActivities: undefined,
};

// student['name']

// for (element in student) {
//     var result = student[element]
//   console.log(result);
// }


//------------- for off loop ---------------\\

//- used to loops through the values of an objects (Array)
//- for loop iterates over a object value (Array)
//- Mostly used for array

/*
syntax:

    for(value of myObject){
        task/code.....
    }

    for(item of student){
        console.log(item)
    }

*/

// var person = ['John', 18, {address:"something", postcode: 23}, ['Reading']]

// for(item of person) {
//     console.log(item)
// }

// console.log(typeof person)


//--------------While loop--------------\\

// let num = 1

// while (num <= 10){
//     console.log(num)
//     num++
// }

//--------------Do while loop--------------\\



let num = 11

do{
    console.log(num)
    num++
}
while (num <= 10)


//Do more practice
