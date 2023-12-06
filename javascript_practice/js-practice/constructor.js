function Person(){
    this.name = "Bhuvan",
    this.age = 26
}
function Student(name,age){
    this.name = name
    this.age = age
}

const person =new Person()
console.log(person.name)
console.log(person.age)


const student1 =new Student("Bhuvan",21)
const student2 =new Student("Hellboy",22)


console.log("student 1 name is "+student1.name)
console.log("student 1 age is "+student1.age)


console.log("student 2 name is "+student2.name)
console.log("student 2 age is "+student2.age)

