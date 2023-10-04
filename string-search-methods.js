//------------------ String Search Methods-----------------\\
//You can skip all search methods except includes()

//-----------------Includes()---------------------\\
/*
- ES6 Feature
- Returns boolean is a string contains a specified value
- case sencentive
*/

var myText = 'The Quick Brown Fox'

var result = myText.includes('Fox')



var text = 'Hello World'

var result = text.includes('Hello', 1)  // includes(string, startIndex/StartPosition)

console.log(result);
