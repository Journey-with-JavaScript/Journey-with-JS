// Date object

// Year, Month, Day, Hour, Minute, Second, Millisecond
// 2023-12-17:22:21:40:99


//1. Without argument

// const currentDate = new Date()

// console.log(currentDate)

//2. With a date string

// const dateString = '2022-03-16'

// const fixedDate = new Date(dateString)

// console.log(fixedDate)

//3. with year month, day

const fixedDate = new Date(2022, 11, 16)

//Month is 0 based. January = 0, february = 1, last=11

// console.log(fixedDate)

//4. with millisecond

// const millisecond  = 1737664000000  //time stamp

// const dateFromMilliSec = new Date(millisecond)

// console.log(dateFromMilliSec);

// Date Components

const now = new Date()

const year = now.getFullYear()

const month = now.getMonth()

const day = now.getDate()

const hour = now.getHours()

const minute = now.getMinutes()

const second = now.getSeconds()

const millisecond = now.getMilliseconds()

console.log(now, year, month, day, hour, minute, second, millisecond)

console.log(now.toDateString());

console.log(now.toTimeString());

console.log(now.toLocaleString());

//moment.js, date-fns, built-in: Intl