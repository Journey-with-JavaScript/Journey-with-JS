//---------------- conditional statement ---------------\\

/*
- to perform different action/task based on different conditions
- very often used
- JS conditional statement
    1. if else
    2. switch
*/

//--------------- IF ELSE --------------\\

// if
// else
/*

    if(condition) {
        my action/code/tasks
    }
*/

// var isRegular = true
var GPA = 892;

if (typeof GPA === 'number' && (1 <= GPA && GPA <= 5)) {
  if (GPA === 5) {
    console.log("Your result is: A+");
  } else if (GPA >= 4) {
    console.log("Your result is: A");
  } else if (GPA >= 3.5) {
    console.log("Your result is: A-");
  } else if (GPA >= 3) {
    console.log("Your result is: B");
  } else if (GPA >= 2) {
    console.log("Your result is: C");
  } else if (GPA >= 1) {
    console.log("Your result is: D");
  } else if (GPA < 1) {
    console.log("Your result is: F");
  } else {
    console.log("Result not found!");
  }
} else {
  console.log("Invalid input value!");
}



//if
//else if
//else
