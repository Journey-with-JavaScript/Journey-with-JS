//Optional chaining

//ES2020

const students = [
  { name: "A", roll: 123, email: "abc@email.com", isPassed: 34 },
  { name: "B", roll: 145, email: "sdf@email.com"},
  { name: "C", roll: 678, email: "uty564@email.com", isPassed: false },
  { name: "D", roll: 2345, email: "rtr564@email.com", isPassed: true },
];


// const passedStudents = students.filter( student => student.isPassed === true)

console.log(students[1]?.isPassed?.toString())



