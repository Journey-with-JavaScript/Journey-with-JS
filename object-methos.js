//Object keys()

const person = {
    name: 'John',
    age: 30,
    city: 'Dhaka'
}

const personProperties = Object.keys(person)


// console.log(personProperties)


//Object values()

const personValues = Object.values(person)


// console.log(personValues)

//Object entries()

//returns key-value pairs in separate array.
const personEntries = Object.entries(person)

console.log(personEntries);