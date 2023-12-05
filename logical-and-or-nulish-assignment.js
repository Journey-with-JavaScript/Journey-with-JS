//Logical &&=, ||=, ??=
//ES2022

//1. Logical AND-Assign

// variable &&= value

let x = 10

//Before:  
// if(x){
//     x = 20
// }

//After:
     x &&= 20

    //  console.log(x)



//2. Logical OR-Assign

// variable ||= value

let y = undefined
//Before:  
// if(!y){
//     y = 20
// }

//After:
y ||= 20

// console.log(y)



//3. Logical Nullish-Assign

// variable ??= value

//Null or undefined

let z = 0
// if(z === null | undefined){
//     z = 20
// }

z ??= 20


console.log(z)
