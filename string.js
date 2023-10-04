/* ----------------- String --------------------
- used to represent text
- one the fundamental data type
- a string is a sequence of characters enclosed with single quote ('') or double quotes("")


The quick brown fox
has jumped over the lazy dog.
*/

var text = "Student" // "Hello"

/* --------------String Length----------------
- to find the length of sting
*/

// console.log(text.length)


//------------Escape character (not often used)--------------\\

/*
- can not used "" inside a string declare with "". same goes for single ''.
- to avoid this we use escape characters
- Do some practice from W3 schools
*/

// var para = 'The quick brown fox has \'jumped\' over the lazy dog'
// var para = 'The quick brown fox has \\jumped\\ over the lazy dog'
var para = 'The quick brown fox has \njumped over the lazy dog '

// console.log(para)

//-------------------String concatenation---------------\\
/*
- The process of combining multiple strings together to form a longer sting
- + operator

*/
var firstName = 'Rahim'
var lastName = 'Uddin'

var fullName = firstName + ' ' + lastName

// console.log(fullName)

//-------------Adding string with number----------\\

/*
1. string + string = string
2. number + number = number

3. string + number = string
4. number + string = string

*/

var person = 'Sadman'

var result = 5

var output = person + 5

console.log(typeof output)