//Ternary Operator || Conditional operator

//concise way to write conditional statement

//syntax:

// condition  ?  expression1 (if true)  :  expression2 (if false)

const marks = 61;

// const message = marks >= 40 ? 'You have passed!' : 'You have failed!'

const message =
  marks < 40
    ? "You have failed!"
    : marks >= 40 && marks <= 49
    ? "You have pass, result D"
    : marks >= 50 && marks <= 60
    ? "You have passed, result A-"
    : "Your result is A+";

console.log(message);
