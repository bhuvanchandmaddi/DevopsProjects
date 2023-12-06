//console.log(global);

//default methods available in global object
const interval = setInterval(() => {
  console.log("This runs every second");
}, 1000);

setTimeout(() =>{
    clearInterval(interval)
    console.log("Interval got cleared")

},5000)

// default properties
console.log(__dirname)
console.log(__filename)