const NAME = "Bhuvan Chand";
let age = 26;
let occupation = "Student";

console.log(NAME);
console.log(age);
console.log(occupation);

if (true) {
  var name1 = "Nathan";
}

console.log(name1);

//String template
console.log(`My name is ${NAME} and my age is ${age}`);

let first_name;

console.log(first_name); // undefined

//Arrays in javascript

let birds = ["sparrow", "parrtot", "peacock"];

console.log(birds);

birds.push("crow");
console.log(birds);

birds.pop();
console.log(birds);

birds.unshift("Pegion");
console.log(birds);

birds.shift();
console.log(birds);

// conditional statements
let balance = 7000;

if (balance > 5000) {
  console.log("You have the money for this trip. Let's go!");
}
console.log("The end!");

//logical operatos
let myFood = "Banana";

if (myFood == "Banana" || myFood == "Apple") {
  console.log("Eat fruits everyday to keep you healthy.");
}

if (myFood === "Chocolate Cake") {
  console.log("Enjoy the sweet treat.");
}

// functions
function printName(name = "Bhuvan") {
  console.log("My name is " + name);
}

printName("Maddi");
// default argument will be used
printName();
// default argument will be used
printName(undefined);
// default argument will not be used. It thins that we want to send no value. So null value will be used
printName(null);

//loops
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(" * ");
  }
  console.log("\n");
}


//Arrow functions or lamda functions
const greetings = (name, age) => console.log(`Hello ${name}, you are turning ${age} this year`);
greetings("Bhuvanchand",26);

// use arguments keyword inside the function to print arguments
//Ignore it not widely used
const addition = function (a,b) {
    console.log(arguments)
}
addition(4,7)

