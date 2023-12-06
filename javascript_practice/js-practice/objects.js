const student = {
  firstName: "Bhuvanchand",
  lastName: "Maddi",
  greet: function () {
    console.log(
      `Hi ${this.firstName}, how are you. is yout last name ${this.lastName}`
    );
  },
};


console.log(student.firstName)

console.log(student.lastName)

student.greet()