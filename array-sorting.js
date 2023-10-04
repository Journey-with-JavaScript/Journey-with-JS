//-------------- Sorting ----------------\\

// sort out an array elements

var myArray = ['Cat', 'Dog', 'Array', 'Ball', 'Apple', 'Eagle', 'Coconut', 'Zebra']

// Ascending: A --- Z
// Descending: Z --- A

var result = myArray.sort()   //By default: ASC

var result = myArray.reverse()  //1st sort then reverse to get DESC order

// console.log(result)

var myNumbers = [38, 40, 0, 5, 100, 10, 25, 56, 1000]

// 38 - 40 = -2

var output = myNumbers.sort(function(a, b){return (a - b)})
// var output = myNumbers.sort(function(a, b){return (b - a)})

console.log(output);