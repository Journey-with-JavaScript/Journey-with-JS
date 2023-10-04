/*-------------------String Methods--------------\\
1. Length
2. Case conversion
3. Extraction methods
4. Trim
5. Extracting Character
6. Pads Methods
7. Concat
8. Split
9. Replace Methods

*/

//------------------Case conversion--------------\\
//1. Upper case
//2. Lower case
var text = 'Hello'

var upperCaseText = text.toUpperCase()
// console.log(upperCaseText)

//---------------------Concat()---------------------\\
//joins two or more string

var firstName = 'John'
var lastName = 'Doe'

var fullName = firstName.concat(' ', lastName);

// console.log(fullName)


//--------------------String Extraction Methods--------------------\\
//1. Slice()
//2. Substring()
//3. Substr()

//1. Slice()
//- extract a part of string & returns a string.
//- slice(startIndex, endIndex)
//- index means the position of characters

var text = 'Hello World'

// var result = text.slice(6, 11)

// var result = text.slice(-6, -3)

// console.log(result)

//negative parameter count from last index

//2. Substring()
//-similar to slice()
//- the difference is negative parameter are counted as 0.


var result = text.substring(6, 11)  //output: same as slice()

// var result = text.slice(-6, -3)     //output: wo

var result = text.substring(-6, 5)     //output: Hello

// console.log(result)

//3. Substr()
//-same as slice
//- difference is 2nd parameter specifies the length of extracted part not position from 0

var fruits = 'Apple, Banana, Coconut'

var withSlice = fruits.slice(7, 13)

var withSubStr = fruits.substr(7, 6)

// console.log(withSubStr)

//----------------Trim---------------------\\

//-- to remove the whitespace from both side of a string

// var text = 'Rahim            '

// var result = text.trim()

// //trimStart()
// //trimEnd()

// console.log(result,'test')


//-------------Character extraction methods-------------\\

//1. charAt(): Returns the character at a specified index (position) in string

var text = 'Hello World'

// var output = text.charAt(0)
// var myChar = text.charAt(6)

// console.log(output,  myChar)


//2. CharCodeAt()
// UTF-16: 0 --- 2^16 == 65536

// var myChar = text.charAt(6)
// var myCharCode = text.charCodeAt(6)

// console.log(myChar, '=', myCharCode)

//3. Index/Property access method: ES 2009
var result = text[6]

// console.log(typeof result)


//---------------Pads Methods---------------\\

//1. padStart(): pads a string from the start
var studentId = 'id-'

var result = studentId.padEnd(7, '0')

// console.log(result)

//2. padEnd(): pads a string from the end


//-------------- Split Method ------------------\\


// Split(): A string can be converted to an array
var myLetters = '18,24,32,43,55'
var result = myLetters.split(",")

console.log(result)

//


//-----------Replace-------------\\

//-- to replace a specific value in a string

//replace()
//replaceAll(): ES6 feature... 2021

var myText = 'The Quick Brown Fox has a Fox'

console.log(myText.replaceAll('Fox', 'Cat'))

//i means case insencetive
//g global





