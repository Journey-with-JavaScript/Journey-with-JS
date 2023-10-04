//-------------------- Numbers ------------------\\
/*
- JS has only one type of number
- Both integer & float are number type in JS.
- Decimal: 0---9: integer, float. 
- The maximum number of decimal is 17
- Integer provides accurate result till 15 digit
- extra large or extra small numbers can be written in science (exponent) notation
 123x10^5 = 123e5

- Floating precision does not always provide accurate result

*/

//-------------------- NaN ---------------------\\
//Not a Number
//Js represent word including that a number is not a legal number

var x = 100/'Apple'

// var x = 100/'10'
var result = isNaN(x)

console.log(result)

//---------------- Number Methods ---------------\\
/*
1. toString()


*/

//--------------- Type Conversion ------------- \\

var num3 = '10'

console.log(Number(num3));

//toString()
//Number()
//parseInt()
//parseFloat()
