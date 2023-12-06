const xyz = require("./people.js")

console.log(xyz) // prints those 2 arrays as a single object

console.log(xyz.people) // prints people array

console.log(xyz.age) // prints age array


// This is recommended and best way

const {people,age} = require("./people.js")

console.log(people)

console.log(age)





