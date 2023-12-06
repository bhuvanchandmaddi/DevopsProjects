class Student {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

student1 =new Student("Bhuvan",21)
student2 =new Student("Bhuvan Chand",23)

console.log("student 1 name is "+student1.name)
console.log("student 1 age is "+student1.age)


console.log("student 2 name is "+student2.name)
console.log("student 2 age is "+student2.age)
