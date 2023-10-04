//------------- String Literals -------------\\
/*
Also called:
- template literals
- template string
- string template
- back-tick syntax: ``

use case

- can use single or double or both quote inside a string
- it allows multiline string
- It provides an easy way to interpolate variable and expression into string.
this method is called string interpolation.
- syntax of interpolation: ${......}

*/

var text = `The quick brown 
fox has 'jumped' 
over the "lazy" dog.`

var fullName = 'John Doe'
var fathersAge = 40
var diffWithSonAge = 25

var userInfo = `User Name: ${fullName}, Age: ${fathersAge - diffWithSonAge}
`

console.log(userInfo)

