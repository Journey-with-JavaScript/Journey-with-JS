// -------------------------------FUNCTION--------------------------------

/*

function funcName (parameter/argument){
    task
}

*/



// var sum = num1 + num2 + num3 


function sumOfTwoNum(param1, param2 = 1){
    console.log(param1, param2)
    var sum  = Number(param1) + Number(param2)
    return sum
}


var num1 = 4
var num2 = 5

console.log(sumOfTwoNum(num1))   //function call


// console.log(sumOfTwoNum(100, '40')) 




// console.log(sumOfTwoNum(123423, '3432')) 

function welcomeUser(userName = 'User'){
    return `Hello, ${userName} welcome here!`
}

console.log(welcomeUser())